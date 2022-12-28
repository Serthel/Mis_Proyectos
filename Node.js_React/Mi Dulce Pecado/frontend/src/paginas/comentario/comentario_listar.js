import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Comentario_Borrar from './comentario_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';

//Metodo que contiene las tareas para listar pedidos
function Comentario_Listar() {

    const [dataComentario, setdataComentario] = useState([])

    useEffect(() => {
        axios.get('/api/comentario/listar').then(res => {
            console.log(res.data)
            setdataComentario(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Lista de Comentarios</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={8} align="right"><Link to={`/ComentarioAgregar`}><li className='btn btn-success'>Agregar Comentario</li></Link></td>
                                </tr>
                                <tr key={0}>
                                    <td align="center">Id</td>
                                    <td align="center">Id Usuario</td>
                                    <td align="center">Id Producto</td>
                                    <td align="center">Calificacion</td>
                                    <td align="center">Fecha_Comentario</td>
                                    <td align="center">Mensaje</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>
                            </thead>
                            <tbody className='dialog'>
                                {
                                    dataComentario.map(micomentario => (
                                        <tr key={micomentario.id}>
                                            <td align="center">{micomentario.id}</td>
                                            <td align="center">{micomentario.id_usuario}</td>
                                            <td align="center">{micomentario.id_producto}</td>
                                            <td align="center">{micomentario.calificacion}</td>
                                            <td align="center">{micomentario.fecha_comentario}</td>
                                            <td align="center">{micomentario.contenido_comentario}</td>
                                            <td align="center"><Link to={`/comentario_editar/${micomentario.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { Comentario_Borrar(micomentario.id) }}>Borrar</li></td>
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
export default Comentario_Listar;
