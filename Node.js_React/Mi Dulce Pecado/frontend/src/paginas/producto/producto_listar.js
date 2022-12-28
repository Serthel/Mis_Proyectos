import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Producto_Borrar from './producto_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';

//Metodo que contiene las tareas para listar pedidos
function Producto_Listar() {

    const [dataProducto, setdataProducto] = useState([])

    useEffect(() => {
        axios.get('/api/producto/listar').then(res => {
            console.log(res.data)
            setdataProducto(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Lista de Productos</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={8} align="right"><Link to={`/ProductoAgregar`}><li className='btn btn-success'>Agregar Productos</li></Link></td>
                                </tr>





                                <tr key={0}>
                                    <td align="center">Id</td>
                                    <td align="center">Id Categoria</td>
                                    <td align="center">Nombre</td>
                                    <td align="center">Descripcion</td>
                                    <td align="center">Precio</td>
                                    <td align="center">Activo</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>
                            </thead>
                            <tbody className='dialog'>
                                {
                                    dataProducto.map(miproducto => (
                                        <tr key={miproducto.id}>
                                            <td align="center">{miproducto.id}</td>
                                            <td align="center">{miproducto.id_categoria}</td>
                                            <td align="center">{miproducto.nombre}</td>
                                            <td align="center">{miproducto.descripcion}</td>
                                            <td align="center">{miproducto.precio}</td>
                                            <td align="center">{miproducto.activo}</td>
                                            <td align="center"><Link to={`/producto_editar/${miproducto.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { Producto_Borrar(miproducto.id) }}>Borrar</li></td>
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
export default Producto_Listar;
