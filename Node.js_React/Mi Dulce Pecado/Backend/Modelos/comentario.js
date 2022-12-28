const mongoose= require('mongoose');
const miesquema= mongoose.Schema;

const miesquemaComentario = new miesquema({
    
    id: String, 
    id_usuario:String, 
    id_producto:String, 
    calificacion:String, 
    fecha_comentario:String,
    contenido_comentario:String

});

const modeloComentario = mongoose.model('comentario',miesquemaComentario);
module.exports = modeloComentario;

