const express = require('express');
const router = express.Router();
const modeloCategoria = require('../Modelos/categoria');

router.get('/listar', (req, res) => {
    modeloCategoria.find({}, function(docs,err)
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
    modeloCategoria.find({id:req.params.id}, function(docs,err)
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
    const nuevoCategoria = new modeloCategoria({
        id : req.body.id,
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
    });
    nuevoCategoria.save(function(err)
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
    modeloCategoria.findOneAndUpdate({id:req.params.id},
    {
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
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
    modeloCategoria.findOneAndDelete({id:req.params.id},
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