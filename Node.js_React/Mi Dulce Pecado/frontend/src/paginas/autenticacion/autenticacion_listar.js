import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Autenticacion_Borrar from './autenticacion_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';



//Metodo que contiene las tareas para listar pedidos
function Autenticacion_Listar() {

    const [dataAutenticacion, setdataAutenticacion] = useState([])

    useEffect(() => {
        axios.get('/api/autenticacion/listar').then(res => {
            console.log(res.data)
            setdataAutenticacion(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Lista de Datos de Autenticacion</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table class="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={6} align="right"><Link to={`/AutenticacionAgregar`}><li className='btn btn-success'>Agregar Autenticacion</li></Link></td>
                                </tr>
                                <tr key={0}>
                                    <td align="center" scope="col">Id</td>
                                    <td align="center" scope="col">Id Perfil</td>
                                    <td align="center" scope="col">Nombre</td>
                                    <td align="center" scope="col">Contraseña</td>
                                    <td align="center" scope="col"></td>
                                    <td align="center" scope="col"></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataAutenticacion.map(miautenticacion => (
                                        <tr key={miautenticacion.id}>
                                            <td align="center">{miautenticacion.id}</td>
                                            <td align="center">{miautenticacion.id_perfil}</td>
                                            <td align="center">{miautenticacion.nombre_usuario}</td>
                                            <td align="center">{miautenticacion.contraseña}</td>
                                            <td align="center"><Link to={`/autenticacion_editar/${miautenticacion.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { Autenticacion_Borrar(miautenticacion.id) }}>Borrar</li></td>
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
export default Autenticacion_Listar;
