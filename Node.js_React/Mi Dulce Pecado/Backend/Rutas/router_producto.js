const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorProducto = require('../Controladores/controller_producto');

router.get("/listar",controladorProducto);
router.get("/cargar/:id",controladorProducto);
router.post("/agregar",controladorProducto);
router.post("/editar/:id",controladorProducto);
router.delete("/borrar/:id",controladorProducto);

module.exports = router;