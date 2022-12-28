const express = require('express');
const router = express.Router();
const modeloCarrito_Compra = require('../Modelos/carrito_compra');

router.get('/listar', (req, res) => {
    modeloCarrito_Compra.find({}, function(docs,err)
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
    })
});

router.get('/cargar/:id', (req, res) => {
    modeloCarrito_Compra.find({id:req.params.id}, function(docs,err)
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
    })
});

router.post('/agregar',(req,res)=>{
    const nuevoCarrito_Compra = new modeloCarrito_Compra({
   
        id: req.body.id, 
        id_usuario: req.body.id_usuario,
        fecha_registro: req.body.fecha_registro,
        descuento: req.body.descuento,
        cantidad: req.body.cantidad,
        pagado: req.body.pagado,

    });
    nuevoCarrito_Compra.save(function(err)
    {
        if(!err)
        {
            res.send("El registro se agregó exitosamente");
        }
        else
        {
            res.send(err.stack);
        }
    }
    );
});

router.post('/editar/:id',(req,res)=>{
    modeloCarrito_Compra.findOneAndUpdate({id:req.params.id},
    {
        id_usuario: req.body.id_usuario,
        fecha_registro: req.body.fecha_registro,
        descuento: req.body.descuento,
        cantidad: req.body.cantidad,
        pagado: req.body.pagado,

    },(err) =>
    {
        if(!err)
        {
            res.send("El registro se editó exitosamente");
        }
        else
        {
            res.send(err.stack);
        }
    })
});

router.delete('/borrar/:id',(req,res)=>{
    modeloCarrito_Compra.findOneAndDelete({id:req.params.id},
        (err) =>
        {
            if(!err)
            {
                res.send("El registro se borró exitosamente");
            }
            else
            {
                res.send(err.stack);
            }
        })
    });

module.exports = router;