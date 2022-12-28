//creo una constante que trae
const mongoose = require('mongoose');
const miesquema = mongoose.Schema;

const miesquemaUsuario= new miesquema({

    id: String,
    nombre_usuario: String,
    apellido_usuario: String,
    identificacion: String,
    email:String,
    contacto: String

});

// Se crea una constante que trae la propiedad model de mongoose y en donde se carga el esquema que creamos
const modeloUsuario = mongoose.model('usuario', miesquemaUsuario);
module.exports= modeloUsuario;

