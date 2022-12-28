const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorPerfil = require('../Controladores/controller_perfil');

router.get("/listar",controladorPerfil);
router.get("/cargar/:id",controladorPerfil);
router.post("/agregar",controladorPerfil);
router.post("/editar/:id",controladorPerfil);
router.delete("/borrar/:id",controladorPerfil);

module.exports = router;