import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function CategoriaEditar() {
    const parametros = useParams()
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
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

        axios.get(`/api/categoria/cargar/${parametros.id}`, config).then(res => {
            console.log(res.data[0])
            const dataCategoria = res.data[0]
            setNombre(dataCategoria.nombre)
            setDescripcion(dataCategoria.descripcion)
        })
    }, [])

    function categoriaActualizar() {
        const categoriaactualizar = {
            id: parametros.id,
            nombre: nombre,
            descripcion: descripcion,

        }

        console.log(categoriaactualizar)

        const config = {
            body: JSON.stringify(categoriaactualizar),
            headers: {'Content-Type': 'application/json', 'x-auth-token': bearer}
        }

        axios.post(`/api/categoria/editar/${parametros.id}`, categoriaactualizar,config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/categoria_listar')
        })
            .catch(err => { console.log(err.stack) })

    }

    function categoriaRegresar() {
        //window.location.href="/";
        navigate('/categoria_listar')
    }

    return (

        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Categoria</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <input type="text" className="form-control" id="descripcion" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={categoriaRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" className="btn btn-success" onClick={categoriaActualizar}>Actualizar</button>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

//<div className="mb-3 form-check form-switch">
//<input className="form-check-input" type="checkbox" role="switch" id="activo"></input>
//</div>

export default CategoriaEditar;