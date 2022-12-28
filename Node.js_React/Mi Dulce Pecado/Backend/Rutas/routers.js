const express = require('express');
const router = express.Router();

const rutaAutenticacion = require('./router_autenticacion');
router.use("/autenticacion",rutaAutenticacion);

const rutaCarrito_Compra = require('./router_carrito_compra');
router.use("/carrito_compra",rutaCarrito_Compra);

const rutaCategoria= require('./router_categoria');
router.use("/categoria",rutaCategoria);

const rutaComentario = require('./router_comentario');
router.use("/comentario",rutaComentario);

const rutaFactura = require('./router_factura');
router.use("/factura",rutaFactura);

const rutaInfo_Envio = require('./router_info_envio');
router.use("/info_envio",rutaInfo_Envio);

const rutaPerfil = require('./router_perfil');
router.use("/perfil",rutaPerfil);

const rutaProducto = require('./router_producto');
router.use("/producto",rutaProducto);

const rutaUsuario = require('./router_usuario');
router.use("/usuario",rutaUsuario);

const rutaAuth = require('./router_auth');
router.use("/auth",rutaAuth);

const rutaAutenticacion_Usuario = require('./router_autenticacion_usuario');
router.use("/autenticacion_usuario",rutaAutenticacion_Usuario);

const rutaUsuarios = require('./router_usuarios');
router.use("/usuarios",rutaUsuarios);



module.exports = router;