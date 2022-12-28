import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function UsuarioEditar() {
    const parametros = useParams()
    const [nombre_usuario, setNombreUsuario] = useState('')
    const [apellido_usuario, setApellidoUsuario] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [email, setEmail] = useState('')
    const [contacto, setContacto] = useState('')
    const navigate = useNavigate()

        //********************************************************************************
        //Codigo para enviar peticion con autenticación
        //********************************************************************************
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") { bearer = ""; } else { bearer = `${token}`; }
        const config = { headers: { 'Content-Type': 'application/json', 'x-auth-token': bearer } }
        //********************************************************************************


    useEffect(() => {
            axios.get(`/api/usuario/cargar/${parametros.id}`).then(res => {
            console.log(res.data[0])
            const dataUsuario = res.data[0]
            setNombreUsuario(dataUsuario.nombre_usuario)
            setApellidoUsuario(dataUsuario.apellido_usuario)
            setIdentificacion(dataUsuario.identificacion)
            setEmail(dataUsuario.email)
            setContacto(dataUsuario.contacto)
        })
    }, [])

    function usuarioActualizar() {
        const usuarioactualizar = {

            id: parametros.id,
            nombre_usuario: nombre_usuario,
            apellido_usuario: apellido_usuario,
            identificacion: identificacion,
            email: email,
            contacto: contacto
        }

        console.log(usuarioactualizar)

        const config = {
            body: JSON.stringify(usuarioactualizar),
            headers: {'Content-Type': 'application/json', 'x-auth-token': bearer}
        }

        axios.post(`/api/usuario/editar/${parametros.id}`, usuarioactualizar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/usuario_listar')
        })
            .catch(err => { console.log(err.stack) })


    }

    function usuarioRegresar() {
        //window.location.href="/";
        navigate('/usuario_listar')
    }

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Actualizar Usuario</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="nombre_usuario" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre_usuario" value={nombre_usuario} onChange={(e) => { setNombreUsuario(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido_usuario" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="apellido_usuario:" value={apellido_usuario} onChange={(e) => { setApellidoUsuario(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="identificacion" className="form-label">Identificacion</label>
                            <input type="text" className="form-control" id="identificacion" value={identificacion} onChange={(e) => { setIdentificacion(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contacto" className="form-label">Contacto</label>
                            <input type="text" className="form-control" id="contacto" value={contacto} onChange={(e) => { setContacto(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={usuarioRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" className="btn btn-success" onClick={usuarioActualizar}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}


export default UsuarioEditar;