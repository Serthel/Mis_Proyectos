import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../../componentes/Navbar';
import ContentHeader from '../../componentes/ContentHeader';
import Modal from '../../componentes/modal';
import Footer from '../../componentes/Footer';
import Swal from 'sweetalert2';


function ProductoEditar() {
    const parametros = useParams()
    const [id_Categoria, setIdCategoria] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [activo, setActivo] = useState('')
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

        axios.get(`/api/producto/cargar/${parametros.id}`).then(res => {

            console.log(res.data[0])
            const dataProducto = res.data[0]
            setIdCategoria(dataProducto.id_Categoria)
            setNombre(dataProducto.nombre)
            setDescripcion(dataProducto.descripcion)
            setPrecio(dataProducto.precio)
            setActivo(dataProducto.activo)
        })
    }, [])

    function productoActualizar() {
        const productoactualizar = {
            id: parametros.id,
            id_Categoria: id_Categoria,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            activo: activo
        }

        console.log(productoactualizar)

        const config = {
            body: JSON.stringify(productoactualizar),
            headers: {'Content-Type': 'application/json', 'x-auth-token': bearer}
        }

        axios.post(`/api/producto/editar/${parametros.id}`, productoactualizar, config).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: 'El registro fue actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/produto_listar')
        })
            .catch(err => { console.log(err.stack) })

    }

    function productoRegresar() {
        //window.location.href="/";
        navigate('/producto_listar')
    }

    return (

        <div>
            <Navbar />
            <ContentHeader />
            <Modal />
            <div className="container mt-5">
                <h4>Actualizar Productos</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="id_Categoria" className="form-label">Id Caategoria</label>
                            <input type="text" className="form-control" id="id_Categoria" value={id_Categoria} onChange={(e) => { setIdCategoria(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <input type="text" className="form-control" id="descripcion" value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input type="text" className="form-control" id="precio" value={precio} onChange={(e) => { setPrecio(e.target.value) }}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="activo" className="form-label">Activo</label>
                            <input type="text" className="form-control" id="activo" value={activo} onChange={(e) => { setActivo(e.target.value) }}></input>
                        </div>
                        <div className="mb-12">
                            <button type="button" onClick={productoRegresar} className="btn btn-primary">Atras</button>
                            <button type="button" className="btn btn-success" onClick={productoActualizar}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}



export default ProductoEditar;