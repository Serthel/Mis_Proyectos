import axios from 'axios';
import uniquid from 'uniqid';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function Factura_Agregar() {

    const [id_usuario, setIdUsuario] = useState('')
    const [id_Envio, setIdEnvio] = useState('')
    const [id_producto, setIdProducto] = useState('')
    const [fecha_compra, setFechaCompra] = useState('')
    const [estado_pagado, setEstadoPagado] = useState('')
    const navigate = useNavigate()

    function facturaInsertar() {

        const facturainsertar = {

            id: uniquid(),
            id_usuario: id_usuario,
            id_Envio: id_Envio,
            id_producto: id_producto,
            fecha_compra: fecha_compra,
            estado_pagado: estado_pagado

        }

        console.log(facturainsertar)

        //********************************************************************************
        //Codigo para enviar peticion con autenticación
        //********************************************************************************
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") { bearer = ""; } else { bearer = `${token}`; }
        const config = { headers: { 'Content-Type': 'application/json', 'x-auth-token': bearer } }
        //********************************************************************************


        axios.post(`/api/factura/agregar`, facturainsertar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/factura_listar')
        })
            .catch(err => { console.log(err.stack) })

    }

    function facturaRegresar() {
        //window.location.href="/";
        navigate('/factura_listar')
    }

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Nueva Factura</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="id_usuario" className="form-label">Id Usuario</label>
                            <input type="text" className="form-control" id="id_usuario" value={id_usuario} onChange={(e) => { setIdUsuario(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_Envio" className="form-label">Id Envio</label>
                            <input type="text" className="form-control" id="id_Envio" value={id_Envio} onChange={(e) => { setIdEnvio(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_producto" className="form-label">Id Producto</label>
                            <input type="text" className="form-control" id="id_producto" value={id_producto} onChange={(e) => { setIdProducto(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha_compra" className="form-label">Fecha Compra</label>
                            <input type="text" className="form-control" id="fecha_compra" value={fecha_compra} onChange={(e) => { setFechaCompra(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estado_pagado" className="form-label">Estado Pago</label>
                            <input type="text" className="form-control" id="estado_pagado" value={estado_pagado} onChange={(e) => { setEstadoPagado(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={facturaRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" onClick={facturaInsertar} className="btn btn-success">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Factura_Agregar;