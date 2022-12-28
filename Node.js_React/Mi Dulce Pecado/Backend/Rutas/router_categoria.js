const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorCategoria = require('../Controladores/controller_categoria');

router.get("/listar",controladorCategoria);
router.get("/cargar/:id",controladorCategoria);
router.post("/agregar",controladorCategoria);
router.post("/editar/:id",controladorCategoria);
router.delete("/borrar/:id",controladorCategoria);

module.exports = router;