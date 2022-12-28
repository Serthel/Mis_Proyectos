const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorCarrito_Compra = require('../Controladores/controller_carrito_compra');

router.get("/listar",controladorCarrito_Compra);
router.get("/cargar/:id",controladorCarrito_Compra);
router.post("/agregar",controladorCarrito_Compra);
router.post("/editar/:id",controladorCarrito_Compra);
router.delete("/borrar/:id",controladorCarrito_Compra);

module.exports = router;