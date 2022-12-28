const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const controladorInfo_Envio = require('../Controladores/controller_info_envio');

router.get("/listar",controladorInfo_Envio);
router.get("/cargar/:id",controladorInfo_Envio);
router.post("/agregar",controladorInfo_Envio);
router.post("/editar/:id",controladorInfo_Envio);
router.delete("/borrar/:id",controladorInfo_Envio);

module.exports = router;