const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorUsuario = require('../Controladores/controller_usuario');

router.get("/listar",controladorUsuario);
router.get("/cargar/:id",controladorUsuario);
router.post("/agregar",controladorUsuario);
router.post("/editar/:id",controladorUsuario);
router.delete("/borrar/:id",controladorUsuario);

module.exports = router;