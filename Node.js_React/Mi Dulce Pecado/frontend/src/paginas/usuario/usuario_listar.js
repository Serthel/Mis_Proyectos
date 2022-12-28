import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Usuario_Borrar from './usuario_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';

//Metodo que contiene las tareas para listar pedidos
function Usuario_Listar() {

    const [dataUsuario, setdataUsuario] = useState([])

    useEffect(() => {
        axios.get('/api/usuario/listar').then(res => {
            console.log(res.data)
            setdataUsuario(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Lista de Usuarios</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={8} align="right"><Link to={`/UsuarioAgregar`}><li className='btn btn-success'>Agregar Usuarios</li></Link></td>
                                </tr>
                                <tr key={0}>
                                    <td align="center">Id</td>
                                    <td align="center">Nombre</td>
                                    <td align="center">Apellido</td>
                                    <td align="center">Identificacion</td>
                                    <td align="center">Email</td>
                                    <td align="center">Contacto</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>
                            </thead>
                            <tbody className='dialog'>
                                {
                                    dataUsuario.map(miusuario => (
                                        <tr key={miusuario.id}>
                                            <td align="center">{miusuario.id}</td>
                                            <td align="center">{miusuario.nombre_usuario}</td>
                                            <td align="center">{miusuario.apellido_usuario}</td>
                                            <td align="center">{miusuario.identificacion}</td>
                                            <td align="center">{miusuario.email}</td>
                                            <td align="center">{miusuario.contacto}</td>
                                            <td align="center"><Link to={`/usuario_editar/${miusuario.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { Usuario_Borrar(miusuario.id) }}>Borrar</li></td>
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
export default Usuario_Listar;
