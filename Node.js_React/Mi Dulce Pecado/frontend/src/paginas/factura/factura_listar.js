import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import factura_borrar from './factura_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';

//Metodo que contiene las tareas para listar pedidos
function Factura_listar() {

    const [dataFactura, setdataFactura] = useState([])

    useEffect(() => {
        axios.get('/api/factura/listar').then(res => {
            console.log(res.data)
            setdataFactura(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Lista de Facturas</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={8} align="right"><Link to={`/Factura_Agregar`}><li className='btn btn-success'>Agregar Factura</li></Link></td>
                                </tr>
                                <tr key={0}>
                                    <td align="center">Id</td>
                                    <td align="center">Id Usuario</td>
                                    <td align="center">Id Envio</td>
                                    <td align="center">Id Producto</td>
                                    <td align="center">Fecha de Compra</td>
                                    <td align="center">Estado</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>
                            </thead>
                            <tbody className='dialog'>
                                {
                                    dataFactura.map(mifactura => (
                                        <tr key={mifactura.id}>
                                            <td align="center">{mifactura.id}</td>
                                            <td align="center">{mifactura.id_usuario}</td>
                                            <td align="center">{mifactura.id_Envio}</td>
                                            <td align="center">{mifactura.id_producto}</td>
                                            <td align="center">{mifactura.fecha_compra}</td>
                                            <td align="center">{mifactura.estado_pagado}</td>
                                            <td align="center"><Link to={`/factura_editar/${mifactura.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { factura_borrar(mifactura.id) }}>Borrar</li></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default Factura_listar;
