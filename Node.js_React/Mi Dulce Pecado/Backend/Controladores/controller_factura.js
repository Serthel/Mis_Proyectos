const express = require('express');
const router = express.Router();
const modeloFactura = require('../Modelos/factura');

router.get('/listar', (req, res) => {
    modeloFactura.find({}, function(docs,err)
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
    modeloFactura.find({id:req.params.id}, function(docs,err)
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
    const nuevoFactura = new modeloFactura({
        id : req.body.id,
        id_usuario: req.body.id_usuario,
        id_Envio: req.body.id_Envio,
        id_producto: req.body.id_producto,
        fecha_compra: req.body.fecha_compra,
        estado_pagado: req.body.estado_pagado
    });
    nuevoFactura.save(function(err)
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
    modeloFactura.findOneAndUpdate({id:req.params.id},
    {
        id_usuario: req.body.id_usuario,
        id_Envio: req.body.id_Envio,
        id_producto: req.body.id_producto,
        fecha_compra: req.body.fecha_compra,
        estado_pagado: req.body.estado_pagado
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
    modeloFactura.findOneAndDelete({id:req.params.id},
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