//creo una constante que trae
const mongoose = require('mongoose');
const miesquema=mongoose.Schema;

const miesquemaPerfil= new miesquema({
    id: String, 
    nombre: String, 
    descripcion:String
});


const modeloPerfil=mongoose.model('perfil',miesquemaPerfil);
module.exports = modeloPerfil;

