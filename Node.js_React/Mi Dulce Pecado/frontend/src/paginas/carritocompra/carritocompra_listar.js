import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carritocompra_Borrar from './carritocompra_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';


//Metodo que contiene las tareas para listar pedidos
function Carritocompra_Listar() {

    const [dataCarritocompra, setdataCarritocompra] = useState([])

    useEffect(() => {
        axios.get('/api/carrito_compra/listar').then(res => {
            console.log(res.data)
            setdataCarritocompra(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Lista del Carrito de Compras</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={8} align="right"><Link to={`/CarritocompraAgregar`}><li className='btn btn-success'>Agregar Carrito de Compras</li></Link></td>
                                </tr>
                                <tr key={0}>
                                    <td align="center">Id</td>
                                    <td align="center">Id Usuario</td>
                                    <td align="center">Fecha</td>
                                    <td align="center">Descuento</td>
                                    <td align="center">cantidad</td>
                                    <td align="center">Pagado?</td>
                                    <td align="center"></td>
                                    <td align="center"></td>
                                </tr>
                            </thead>
                            <tbody className='dialog'>
                                {
                                    dataCarritocompra.map(micarritocompra => (
                                        <tr key={micarritocompra.id}>
                                            <td align="center">{micarritocompra.id}</td>
                                            <td align="center">{micarritocompra.id_usuario}</td>
                                            <td align="center">{micarritocompra.fecha_registro}</td>
                                            <td align="center">{micarritocompra.descuento}</td>
                                            <td align="center">{micarritocompra.cantidad}</td>
                                            <td align="center">{micarritocompra.pagado}</td>
                                            <td align="center"><Link to={`/carritocompra_editar/${micarritocompra.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { Carritocompra_Borrar(micarritocompra.id) }}>Borrar</li></td>
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
export default Carritocompra_Listar;
