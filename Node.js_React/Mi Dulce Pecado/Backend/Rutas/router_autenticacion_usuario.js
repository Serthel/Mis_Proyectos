//Rutas para crear usuarios

const express = require("express");
const router = express.Router();
const usuarioController = require("../Controladores/controller_autenticacion_usuarios");
const { check } = require("express-validator");

// Crea un usuario

//api/usuarios
router.post(
  "/",
  [
    check("id_perfil", "El nombre es obligatorio").not().isEmpty(),
    check("nombre_usuario", "El nombre es obligatorio").not().isEmpty(),
    check("contraseña", "La contraseña debe ser mínimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  usuarioController.crearUsuario
);

module.exports = router;