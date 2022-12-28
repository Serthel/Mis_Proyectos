
const mongoose= require('mongoose');
const miesquema= mongoose.Schema;


const miesquemaAutenticacion = new miesquema({
    id: String, 
    id_perfil:String, 
    nombre_usuario:String,
    contraseña:String
});

// Se crea una constante que trae la propiedad model de mongoose y en donde se carga el esquema que creamos
const modeloAutenticacion=mongoose.model('autenticacion',miesquemaAutenticacion);
module.exports = modeloAutenticacion;

