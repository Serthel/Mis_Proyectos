const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorAtenticacion = require('../Controladores/controller_autenticacion');

router.get("/listar",controladorAtenticacion);
router.get("/cargar/:id",controladorAtenticacion);
router.post("/agregar",controladorAtenticacion);
router.post("/editar/:id",controladorAtenticacion);
router.delete("/borrar/:id",controladorAtenticacion);

module.exports = router;