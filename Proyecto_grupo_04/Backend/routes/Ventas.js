const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { getVentas, crearVenta, ActualizarVenta, BuscarVenta} = require('../controllers/Ventas');
const { validarJwt } = require('../middlewares/validar-jwt');

router.get('/ListarVentas', validarJwt,getVentas)

router.post('/BuscarVenta',
[
    check('id','el codigo de venta es obligatorio').not().isEmpty(),
    validarCampos
], validarJwt,
BuscarVenta);

router.post(
    '/crearVenta',
    [
        check('id','el codigo de venta es obligatorio').not().isEmpty(),
        check('producto','el nombre del producto es obligatorio').not().isEmpty(),
        check('Valor', 'el precio de la venta es obligatorio').not().isEmpty(),
        check('id_vendedor', 'la identificacion del vendedor es obligatoria').not().isEmpty(),
        check('id_cliente', 'la identificacion del cliente es obligatorio').not().isEmpty(),
        check('Fecha','la fecha de la venta es obligatoria').not().notEmpty(),
        check('Nombre_cliente', 'el nombre del cliente es obligatorio').not().isEmpty(),
        check('Estado','El estado inicial de la venta es obligatorio').not().isEmpty(),
        validarCampos
    ], validarJwt,
crearVenta);

router.post(
    '/ActualizarVenta',
    [
        check('id','el codigo de venta es obligatorio').not().isEmpty(),
        check('producto','el nombre del producto es obligatorio').not().isEmpty(),
        check('Valor', 'el precio de la venta es obligatorio').not().isEmpty(),
        check('id_cliente', 'la identificacion del cliente es obligatorio').not().isEmpty(),
        check('Fecha','la fecha de la venta es obligatoria').not().notEmpty(),
        check('Nombre_cliente', 'el nombre del cliente es obligatorio').not().isEmpty(),
        check('Estado','El estado inicial de la venta es obligatorio').not().isEmpty(),
        validarCampos
    ], validarJwt,
ActualizarVenta);

module.exports = router;