const express = require('express');
const router = express.Router();
const modeloInfo_envio = require('../Modelos/info_envio');

router.get('/listar', (req, res) => {
    modeloInfo_envio.find({}, function(docs,err)
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
    modeloInfo_envio.find({id:req.params.id}, function(docs,err)
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
})

router.post('/agregar',(req,res)=>{
    const nuevoInfo_Envio = new modeloInfo_envio({
        id : req.body.id,
        id_carrito: req.body.id_carrito,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        contacto: req.body.contacto,
        pais: req.body.pais,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        codigo_postal: req.body.codigo_postal,
        tipo_vivienda: req.body.tipo_vivienda
    });
    nuevoInfo_Envio.save(function(err)
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
    modeloInfo_envio.findOneAndUpdate({id:req.params.id},
    {
        id_carrito: req.body.id_carrito,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        contacto: req.body.contacto,
        pais: req.body.pais,
        departamento: req.body.departamento,
        ciudad: req.body.ciudad,
        codigo_postal: req.body.codigo_postal,
        tipo_vivienda: req.body.tipo_vivienda
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
    modeloInfo_envio.findOneAndDelete({id:req.params.id},
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