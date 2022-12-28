import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Perfil_Borrar from './perfil_borrar';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';


//Metodo que contiene las tareas para listar pedidos
function Perfil_Listar() {

    const [dataPerfil, setdataPerfil] = useState([])

    useEffect(() => {
        axios.get('/api/perfil/listar').then(res => {
            console.log(res.data)
            setdataPerfil(res.data)
        }).catch(err => { console.log(err.stack) })
    }, [])

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">

                <h4>Lista de Perfiles</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr key={0}>
                                    <td colSpan={5} align="right"><Link to={`/PerfilAgregar`}><li className='btn btn-success'>Agregar Perfil</li></Link></td>
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
                                    dataPerfil.map(miperfil => (
                                        <tr key={miperfil.id}>
                                            <td align="center">{miperfil.id}</td>
                                            <td align="center">{miperfil.nombre}</td>
                                            <td align="center">{miperfil.descripcion}</td>
                                            <td align="center"><Link to={`/perfil_editar/${miperfil.id}`}><li className='btn btn-info'>Editar</li></Link></td>
                                            <td align="center"><li className='btn btn-danger' onClick={() => { Perfil_Borrar(miperfil.id) }}>Borrar</li></td>
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
export default Perfil_Listar;
