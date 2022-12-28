//creo una constante que trae
const mongoose =require('mongoose');
const miesquema=mongoose.Schema;


const miesquemaProducto= new miesquema({
    id: String,  
    id_Categoria:String,
    nombre:String,
    descripcion:String,
    precio:String,
    activo:String
});

// Se crea una constante que trae la propiedad model de mongoose y en donde se carga el esquema que creamos
const modeloProducto = mongoose.model('producto',miesquemaProducto);
module.exports = modeloProducto;

