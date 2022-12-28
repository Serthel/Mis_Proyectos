const mongoose=require('mongoose');
const miesquema=mongoose.Schema;

const miesquemaCarrito_Compra=new miesquema({

    id: String, 
    id_usuario:String,
    fecha_registro:String,
    descuento:String,
    cantidad:String,
    pagado:String
});

// Se crea una constante que trae la propiedad model de mongoose y en donde se carga el esquema que creamos
const modeloCarrito_Compra=mongoose.model('Carrito_Compra',miesquemaCarrito_Compra);
module.exports = modeloCarrito_Compra;

