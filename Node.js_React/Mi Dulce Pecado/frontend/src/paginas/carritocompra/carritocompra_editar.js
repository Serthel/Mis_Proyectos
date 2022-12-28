import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function CarritocompraEditar() {

    const parametros = useParams()
    const [id_usuario, setIdUsuario] = useState('')
    const [fecha_registro, setFechaRegistro] = useState('')
    const [descuento, setDescuento] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [pagado, setPagado] = useState('')
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

        axios.get(`/api/carrito_compra/cargar/${parametros.id}`, config).then(res => {
            console.log(res.data[0])
            const dataCarritocompra = res.data[0]
            setIdUsuario(dataCarritocompra.id_usuario)
            setFechaRegistro(dataCarritocompra.fecha_registro)
            setDescuento(dataCarritocompra.descuento)
            setCantidad(dataCarritocompra.cantidad)
            setPagado(dataCarritocompra.pagado)
        })
    }, [])

    function carritocompraActualizar() {
        const carritocompraactualizar = {
            id: parametros.id,
            id_usuario: id_usuario,
            fecha_registro: fecha_registro,
            descuento: descuento,
            cantidad: cantidad,
            pagado: pagado
        }

        console.log(carritocompraactualizar)

        const config = {
            body: JSON.stringify(carritocompraactualizar),
            headers: {'Content-Type': 'application/json', 'x-auth-token': bearer}
        }

        axios.post(`/api/carritocompra/editar/${parametros.id}`, carritocompraactualizar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/carritocompra_listar')
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
                <h4>Actualizar Carrito de compras</h4>
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
                            <button type="button" className="btn btn-success" onClick={carritocompraActualizar}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

//<div className="mb-3 form-check form-switch">
//<input className="form-check-input" type="checkbox" role="switch" id="activo"></input>
//</div>

export default CarritocompraEditar;