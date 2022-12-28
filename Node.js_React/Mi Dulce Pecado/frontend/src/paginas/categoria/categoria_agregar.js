import axios from 'axios';
import uniquid from 'uniqid';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function CategoriaAgregar() {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()

    function categoriaInsertar() {

        const categoriainsertar = {
            id: uniquid(),
            nombre: nombre,
            descripcion: descripcion,

        }

        console.log(categoriainsertar)

        //********************************************************************************
        //Codigo para enviar peticion con autenticación
        //********************************************************************************
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") { bearer = ""; } else { bearer = `${token}`; }
        const config = { headers: { 'Content-Type': 'application/json', 'x-auth-token': bearer } }
        //********************************************************************************

        axios.post(`/api/categoria/agregar`, categoriainsertar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/')
        })
            .catch(err => { console.log(err.stack) })

    }

    function categoriaRegresar() {
        //window.location.href="/";
        navigate('/categoria_listar')
    }

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Nueva Categoria</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <input type="text" className="form-control" id="descripcion" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={categoriaRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" onClick={categoriaInsertar} className="btn btn-success">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default CategoriaAgregar;