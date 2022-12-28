const express = require('express');
const router = express.Router();
const modeloUsuario = require('../Modelos/usuario');

router.get('/listar', (req, res) => {
    modeloUsuario.find({}, function(docs,err)
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
    modeloUsuario.find({id:req.params.id}, function(docs,err)
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
    const nuevoUsuario= new modeloUsuario({
        id : req.body.id,
        nombre_usuario: req.body.nombre_usuario,
        apellido_usuario: req.body.apellido_usuario,
        identificacion: req.body.identificacion,
        email: req.body.email,
        contacto: req.body.contacto
    });
    nuevoUsuario.save(function(err)
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
    modeloUsuario.findOneAndUpdate({id:req.params.id},
    {
        nombre_usuario: req.body.nombre_usuario,
        apellido_usuario: req.body.apellido_usuario,
        identificacion: req.body.identificacion,
        email: req.body.email,
        contacto: req.body.contacto
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
    modeloUsuario.findOneAndDelete({id:req.params.id},
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