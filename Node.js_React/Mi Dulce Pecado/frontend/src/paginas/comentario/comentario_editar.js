import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';

function ComentarioEditar() {
    const parametros = useParams()
    const [id_usuario, setIdUsuario] = useState('')
    const [id_producto, setIdProducto] = useState('')
    const [calificacion, setCalificacion] = useState('')
    const [fecha_comentario, setFechaComentario] = useState('')
    const [contenido_comentario, setContenidoComentario] = useState('')
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
       
        axios.get(`/api/comentario/cargar/${parametros.id}`, config).then(res => {
            console.log(res.data[0])
            const dataComentario = res.data[0]
            setIdUsuario(dataComentario.id_usuario)
            setIdProducto(dataComentario.id_producto)
            setCalificacion(dataComentario.calificacion)
            setFechaComentario(dataComentario.fecha_comentario)
            setContenidoComentario(dataComentario.contenido_comentario)
        })
    }, [])

    function comentarioActualizar() {
        const comentarioactualizar = {
            id: parametros.id,
            id_usuario: id_usuario,
            id_producto: id_producto,
            calificacion: calificacion,
            fecha_comentario: fecha_comentario,
            contenido_comentario: contenido_comentario
        }

        console.log(comentarioactualizar)

        const config = {
            body: JSON.stringify(comentarioactualizar),
            headers: {'Content-Type': 'application/json', 'x-auth-token': bearer}
        }

        axios.post(`/api/comentario/editar/${parametros.id}`, comentarioactualizar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/comentario_listar')
        })
            .catch(err => { console.log(err.stack) })

    }

    function comentarioRegresar() {
        //window.location.href="/";
        navigate('/comentario_listar')
    }

    return (
        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Actualizacion de Comentarios</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="id_usuario" className="form-label">Id Usuario</label>
                            <input type="text" className="form-control" id="id_usuario" value={id_usuario} onChange={(e) => { setIdUsuario(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_producto" className="form-label">Id Producto</label>
                            <input type="text" className="form-control" id="id_producto" value={id_producto} onChange={(e) => { setIdProducto(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="calificacion" className="form-label">Calificacion</label>
                            <input type="text" className="form-control" id="calificacion" value={calificacion} onChange={(e) => { setCalificacion(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha_comentario" className="form-label">Fecha Comentario</label>
                            <input type="text" className="form-control" id="fecha_comentario" value={fecha_comentario} onChange={(e) => { setFechaComentario(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contenido_comentario" className="form-label">Mensaje</label>
                            <input type="text" className="form-control" id="contenido_comentario" value={contenido_comentario} onChange={(e) => { setContenidoComentario(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={comentarioRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" className="btn btn-success" onClick={comentarioActualizar}>Actualizar</button>
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

export default ComentarioEditar;