const autenticacion = require("../Modelos/autenticacion");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre_usuario, contraseña } = req.body;

  try {
    //Revisar que el usuario registrado sea único
    let usuario = await autenticacion.findOne({ nombre_usuario });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    //crear el nuevo usuario
    usuario = new autenticacion(req.body);

    usuario.contraseña = await bcryptjs.hash(contraseña, 10);

    //Guardar usuario en la bd
    await usuario.save();

    //Firmar el JWT
    const payload = {
      usuario: { id: usuario.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, //1 hora
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
