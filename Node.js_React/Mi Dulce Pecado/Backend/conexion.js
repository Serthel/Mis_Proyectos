const mongoose = require('mongoose');

{/* Coneccion a base de datos en Mongodb Atlas*/}
mongoose.connect('mongodb+srv://MisionTic2022:kZMLg2CFDHBD9nD6@cluster0.v7c2dvt.mongodb.net/MiDulcePecado?retryWrites=true&w=majority')
const miconexion = mongoose.connection;

miconexion.on('connected',()=>{
    console.log("Me conecte exitosamente con la base de datos!");
})

miconexion.on('error',()=>{
    console.log("Hubo un error en la conexion con la base de datos");
})

module.exports = mongoose;

