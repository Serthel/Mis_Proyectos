import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function FacturaEditar() {
    const parametros = useParams()
    const [id_usuario, setIdUsuario] = useState('')
    const [id_Envio, setIdEnvio] = useState('')
    const [id_producto, setIdProducto] = useState('')
    const [fecha_compra, setFechaCompra] = useState('')
    const [estado_pagado, setEstadoPagado] = useState('')
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

        axios.get(`/api/factura/cargar/${parametros.id}`, config).then(res => {

            console.log(res.data[0])
            const datafactura = res.data[0]
            setIdUsuario(datafactura.id_usuario)
            setIdEnvio(datafactura.id_Envio)
            setIdProducto(datafactura.id_producto)
            setFechaCompra(datafactura.fecha_compra)
            setEstadoPagado(datafactura.estado_pagado)
        })
    }, [])

    function facturaActualizar() {
        const facturaactualizar = {
            id: parametros.id,
            id_usuario: id_usuario,
            id_Envio: id_Envio,
            id_producto: id_producto,
            fecha_compra: fecha_compra,
            estado_pagado: estado_pagado
        }

        console.log(facturaactualizar)

        const config = {
            body: JSON.stringify(facturaactualizar),
            headers: {'Content-Type': 'application/json', 'x-auth-token': bearer}
        }

        axios.post(`/api/factura/editar/${parametros.id}`, facturaactualizar,config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
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
            <section>
                <div>
                    <div className="col-sm-12">
                        <div className="card text-dark bg-success mb-3">
                            <div className="card-body">
                                <h4>Actualizar Facturas</h4>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="id_usuario" className="form-label">Id Usuario</label>
                                        <input type="text" className="form-control" id="id_usuario" value={id_usuario} onChange={(e) => { setIdUsuario(e.target.value) }}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="id_Envio" className="form-label">Id Envio</label>
                                        <input type="text" className="form-control" id="id_Envio" value={id_Envio} onChange={(e) => { setIdEnvio(e.target.value) }}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="id_producto" className="form-label">Id Producto</label>
                                        <input type="text" className="form-control" id="id_producto" value={id_producto} onChange={(e) => { setIdProducto(e.target.value) }}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha_compra" className="form-label">Fecha Compra</label>
                                        <input type="text" className="form-control" id="fecha_compra" value={fecha_compra} onChange={(e) => { setFechaCompra(e.target.value) }}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="estado_pagado" className="form-label">Estado Pago</label>
                                        <input type="text" className="form-control" id="estado_pagado" value={estado_pagado} onChange={(e) => { setEstadoPagado(e.target.value) }}></input>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" onClick={facturaRegresar} className="btn btn-primary">Atras</button>
                                        <button type="button" className="btn btn-success" onClick={facturaActualizar}>Actualizar</button>
                                    </div>

                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    )

}


export default FacturaEditar;