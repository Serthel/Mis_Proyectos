import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import infoenvioRefrescar from './infoenvio_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';

//Metodo que contiene las tareas para listar pedidos
function Infoenvio_Listar() {

    const [dataInfoenvio, setdataInfoenvio] = useState([])

    useEffect(() => {
        axios.get('/api/info_envio/listar').then(res => {
            console.log(res.data)
            setdataInfoenvio(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />

            <div className="container mt-5">
                <h4>Lista de la Informacion de Envio</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={13} align="right"><Link to={`/InfoenvioAgregar`}><li className='btn btn-success'>Agregar Informacion de Envio</li></Link></td>
                                </tr>
                                <tr key={0}>
                                    <td align="center">Id</td>
                                    <td align="center">Id Carrito</td>
                                    <td align="center">Nombre</td>
                                    <td align="center">Apellido</td>
                                    <td align="center">Direccion</td>
                                    <td align="center">Contacto</td>
                                    <td align="center">Pais</td>
                                    <td align="center">Departamento</td>
                                    <td align="center">Ciudad</td>
                                    <td align="center">Codigo Postal</td>
                                    <td align="center">Tipo Vivienda</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>
                            </thead>
                            <tbody className='dialog'>
                                {
                                    dataInfoenvio.map(mi_infoenvio => (
                                        <tr key={mi_infoenvio.id}>
                                            <td align="center">{mi_infoenvio.id}</td>
                                            <td align="center">{mi_infoenvio.id_carrito}</td>
                                            <td align="center">{mi_infoenvio.nombre}</td>
                                            <td align="center">{mi_infoenvio.apellido}</td>
                                            <td align="center">{mi_infoenvio.direccion}</td>
                                            <td align="center">{mi_infoenvio.contacto}</td>
                                            <td align="center">{mi_infoenvio.pais}</td>
                                            <td align="center">{mi_infoenvio.departamento}</td>
                                            <td align="center">{mi_infoenvio.ciudad}</td>
                                            <td align="center">{mi_infoenvio.codigo_postal}</td>
                                            <td align="center">{mi_infoenvio.tipo_vivienda}</td>
                                            <td align="center"><Link to={`/infoenvio_editar/${mi_infoenvio.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { infoenvioRefrescar(mi_infoenvio.id) }}>Borrar</li></td>
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
export default Infoenvio_Listar;
