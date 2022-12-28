import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categoria_Borrar from './categoria_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';


//Metodo que contiene las tareas para listar pedidos
function Categoria_Listar() {

    const [dataCategoria, setdataCategoria] = useState([])

    useEffect(() => {
        axios.get('/api/categoria/listar').then(res => {
            console.log(res.data)
            setdataCategoria(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (

        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Lista de Categorias</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={5} align="right"><Link to={`/CategoriaAgregar`}><li className='btn btn-success'>Agregar Categoria</li></Link></td>
                                </tr>


                                <tr key={0}>
                                    <td align="center">Id</td>
                                    <td align="center">Nombre</td>
                                    <td align="center">Descripcion</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>
                            </thead>
                            <tbody className='dialog'>
                                {
                                    dataCategoria.map(micategoria => (
                                        <tr key={micategoria.id}>
                                            <td align="center">{micategoria.id}</td>
                                            <td align="center">{micategoria.nombre}</td>
                                            <td align="center">{micategoria.descripcion}</td>
                                            <td align="center"><Link to={`/categoria_editar/${micategoria.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { Categoria_Borrar(micategoria.id) }}>Borrar</li></td>
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
export default Categoria_Listar;
