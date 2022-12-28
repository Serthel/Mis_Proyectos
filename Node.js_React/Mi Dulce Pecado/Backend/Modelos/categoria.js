const mongoose=require('mongoose');
const miesquema=mongoose.Schema;

const miesquema_Categoria=new miesquema({
    id: String,
    nombre : String,
    descripcion : String
});

// Se crea una constante que trae la propiedad model de mongoose y en donde se carga el esquema que creamos
const modeloCategoria=mongoose.model('categoria',miesquema_Categoria);
module.exports=modeloCategoria;

