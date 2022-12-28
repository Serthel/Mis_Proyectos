import axios from 'axios';
import uniquid from 'uniqid';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';


function CarritocompraAgregar() {
    const [id_usuario, setIdUsuario] = useState('')
    const [fecha_registro, setFechaRegistro] = useState('')
    const [descuento, setDescuento] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [pagado, setPagado] = useState('')

    const navigate = useNavigate()

    function carritocompraInsertar() {

        const carritocomprainsertar = {
            id: uniquid(),
            id_usuario: id_usuario,
            fecha_registro: fecha_registro,
            descuento: descuento,
            cantidad: cantidad,
            pagado: pagado
        }

        console.log(carritocomprainsertar)

        //********************************************************************************
        //Codigo para enviar peticion con autenticación
        //********************************************************************************
        const token = localStorage.getItem("token");
        let bearer;
        if (token === "") { bearer = ""; } else { bearer = `${token}`; }
        const config = { headers: { 'Content-Type': 'application/json', 'x-auth-token': bearer } }
        //********************************************************************************



        axios.post(`/api/carrito_compra/agregar`, carritocomprainsertar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/Carritocompra_Listar')
        })
            .catch(err => { console.log(err.stack) })

    }

    function carritocompraRegresar() {
        //window.location.href="/";
        navigate('/carritocompra_listar')
    }

    return (

        <div>
            <Navbar />
            <ContentHeader />
            <Modal />

            <div className="container mt-5">
                <h4>Nuevo Carrito de Compras</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="id_usuario" className="form-label">Id Usuario</label>
                            <input type="text" className="form-control" id="id_usuario" value={id_usuario} onChange={(e) => { setIdUsuario(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha_registro" className="form-label">Fecha Registro</label>
                            <input type="text" className="form-control" id="fecha_registro" value={fecha_registro} onChange={(e) => { setFechaRegistro(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descuento" className="form-label">Descuento</label>
                            <input type="text" className="form-control" id="descuento" value={descuento} onChange={(e) => { setDescuento(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cantidad" className="form-label">Cantidad</label>
                            <input type="text" className="form-control" id="cantidad" value={cantidad} onChange={(e) => { setCantidad(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pagado" className="form-label">Pagado?</label>
                            <input type="text" className="form-control" id="pagado" value={pagado} onChange={(e) => { setPagado(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={carritocompraRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" onClick={carritocompraInsertar} className="btn btn-success">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

export default CarritocompraAgregar;