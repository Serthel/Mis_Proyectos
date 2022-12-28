const mongoose=require('mongoose');
const miesquema=mongoose.Schema;

const miesquemaFactura = new miesquema({
    
    id: String, 
    id_usuario: String, 
    id_Envio: String, 
    id_producto: String, 
    fecha_compra: String, 
    estado_pagado:String
});

// Se crea una constante que trae la propiedad model de mongoose y en donde se carga el esquema que creamos
const modeloFactura=mongoose.model('factura', miesquemaFactura);
module.exports = modeloFactura;

