import axios from 'axios';
import uniquid from 'uniqid';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';


function AutenticacionAgregar() {
    const [id_perfil, setIdPerfil] = useState('')
    const [nombre_usuario, setNombreUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')

    const navigate = useNavigate()

    function autenticacionInsertar() {

        const autenticacioninsertar = {
            id: uniquid(),
            id_perfil: id_perfil,
            nombre_usuario: nombre_usuario,
            contraseña: contraseña

        }

        console.log(autenticacioninsertar)

        //********************************************************************************
        //Codigo para enviar peticion con autenticación
        //********************************************************************************
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") { bearer = ""; } else { bearer = `${token}`; }
        const config = { headers: { 'Content-Type': 'application/json', 'x-auth-token': bearer } }
        //********************************************************************************


        axios.post(`/api/autenticacion/agregar`, autenticacioninsertar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/Autenticacion_Listar')
        })
            .catch(err => { console.log(err.stack) })

    }

    function autenticacionRegresar() {
        //window.location.href="/";
        navigate('/autenticacion_listar')
    }

    return (


        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Nuevos Datos de Autenticacion</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="id_perfil" className="form-label">Id Perfil</label>
                            <input type="text" className="form-control" id="id_perfil" value={id_perfil} onChange={(e) => { setIdPerfil(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre_usuario" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre_usuario" value={nombre_usuario} onChange={(e) => { setNombreUsuario(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contraseña" className="form-label">Contraseña</label>
                            <input type="text" className="form-control" id="contraseña" value={contraseña} onChange={(e) => { setContraseña(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={autenticacionRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" onClick={autenticacionInsertar} className="btn btn-success">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

export default AutenticacionAgregar;