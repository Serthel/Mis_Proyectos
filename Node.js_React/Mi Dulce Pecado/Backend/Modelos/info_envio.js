const mongoose= require('mongoose');
const miesquema=  mongoose.Schema;

const miesquemaInfo_envio= new miesquema({

    id: String,
    id_carrito: String,
    nombre: String,
    apellido: String,
    direccion: String,
    contacto: String,
    pais: String,
    departamento: String,
    ciudad: String,
    codigo_postal: String,
    tipo_vivienda: String
});

const modeloInfo_envio=mongoose.model('info_envio',miesquemaInfo_envio);
module.exports = modeloInfo_envio;