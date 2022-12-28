import axios from 'axios';
import uniquid from 'uniqid';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function InfoenvioAgregar() {
    const [id_carrito, setIdCarrito] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [direccion, setDireccion] = useState('')
    const [contacto, setContacto] = useState('')
    const [pais, setPais] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [codigo_postal, setCodigoPostal] = useState('')
    const [tipo_vivienda, setTipoVivienda] = useState('')

    const navigate = useNavigate()

    function infoenvioInsertar() {

        const infoenvioinsertar = {
            id: uniquid(),
            id_carrito: id_carrito,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            contacto: contacto,
            pais: pais,
            departamento: departamento,
            ciudad: ciudad,
            codigo_postal: codigo_postal,
            tipo_vivienda: tipo_vivienda

        }

        console.log(infoenvioinsertar)

        //********************************************************************************
        //Codigo para enviar peticion con autenticación
        //********************************************************************************
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") { bearer = ""; } else { bearer = `${token}`; }
        const config = { headers: { 'Content-Type': 'application/json', 'x-auth-token': bearer } }
        //********************************************************************************


        axios.post(`/api/info_envio/agregar`, infoenvioinsertar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/infoenvio_listar')
        })
            .catch(err => { console.log(err.stack) })

    }

    function infoenvioRegresar() {
        //window.location.href="/";
        navigate('/infoenvio_listar')
    }

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Nueva Informacion de Envio</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="id_carrito" className="form-label">Id Carrito</label>
                            <input type="text" className="form-control" id="id_carrito" value={id_carrito} onChange={(e) => { setIdCarrito(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => { setApellido(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => { setDireccion(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contacto" className="form-label">Contacto</label>
                            <input type="text" className="form-control" id="contacto" value={contacto} onChange={(e) => { setContacto(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pais" className="form-label">Pais</label>
                            <input type="text" className="form-control" id="pais" value={pais} onChange={(e) => { setPais(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="departamento" className="form-label">Departamento</label>
                            <input type="text" className="form-control" id="departamento" value={departamento} onChange={(e) => { setDepartamento(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ciudad" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="ciudad" value={ciudad} onChange={(e) => { setCiudad(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="codigo_postal" className="form-label">Codigo Postal</label>
                            <input type="text" className="form-control" id="codigo_postal" value={codigo_postal} onChange={(e) => { setCodigoPostal(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipo_vivienda" className="form-label">Tipo Vivienda</label>
                            <input type="text" className="form-control" id="tipo_vivienda" value={tipo_vivienda} onChange={(e) => { setTipoVivienda(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={infoenvioRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" onClick={infoenvioInsertar} className="btn btn-success">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default InfoenvioAgregar;