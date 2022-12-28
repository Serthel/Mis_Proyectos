const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorFactura = require('../Controladores/controller_factura');

router.get("/listar",controladorFactura);
router.get("/cargar/:id",controladorFactura);
router.post("/agregar",controladorFactura);
router.post("/editar/:id",controladorFactura);
router.delete("/borrar/:id",controladorFactura);

module.exports = router;