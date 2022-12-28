const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorComentario = require('../Controladores/controller_comentario');

router.get("/listar",controladorComentario);
router.get("/cargar/:id",controladorComentario);
router.post("/agregar",controladorComentario);
router.post("/editar/:id",controladorComentario);
router.delete("/borrar/:id",controladorComentario);

module.exports = router;