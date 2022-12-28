const express = require('express');
const router = express.Router();
const modeloAutenticacion = require('../Modelos/autenticacion');

router.get('/listar', (req, res) => {
    modeloAutenticacion.find({}, function(docs,err)
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
    modeloAutenticacion.find({id:req.params.id}, function(docs,err)
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
    const nuevoAutenticacion = new modeloAutenticacion({
        id:req.body.id,
        id_perfil: req.body.id_perfil,
        nombre_usuario:req.body.nombre_usuario,
        contraseña:req.body.contraseña,
    });
    nuevoAutenticacion.save(function(err)
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
    modeloAutenticacion.findOneAndUpdate({id:req.params.id},
    {
        id_perfil: req.body.id_perfil,
        nombre_usuario:req.body.nombre_usuario,
        contraseña:req.body.contraseña,
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
    modeloAutenticacion.findOneAndDelete({id:req.params.id},
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