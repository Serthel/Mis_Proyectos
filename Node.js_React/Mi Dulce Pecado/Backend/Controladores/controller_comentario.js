const express = require('express');
const router = express.Router();
const modeloComentario = require('../Modelos/comentario');

router.get('/listar', (req, res) => {
    modeloComentario.find({}, function(docs,err)
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
    modeloComentario.find({id:req.params.id}, function(docs,err)
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
    const nuevoComentario = new modeloComentario({
        id : req.body.id, 
        id_usuario: req.body.id_usuario, 
        id_producto: req.body.id_producto, 
        calificacion: req.body.calificacion, 
        fecha_comentario: req.body.fecha_comentario, 
        contenido_comentario: req.body.contenido_comentario
    });
    nuevoComentario.save(function(err)
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
    modeloComentario.findOneAndUpdate({id:req.params.id},
    {
        id_usuario: req.body.id_usuario, 
        id_producto: req.body.id_producto, 
        calificacion: req.body.calificacion, 
        fecha_comentario: req.body.fecha_comentario, 
        contenido_comentario: req.body.contenido_comentario
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
    modeloComentario.findOneAndDelete({id:req.params.id},
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