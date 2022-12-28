import axios from 'axios';
import uniquid from 'uniqid';
import { Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../../componentes/Navbar';
import Footer from '../../componentes/Footer';

function CrearCuenta()
{
    const[id_perfil, setIdPerfil] = useState('')
    const[nombre_usuario, setNombreUsuario] = useState('')
    const[contraseña, setContraseña] = useState('')

    const navigate = useNavigate()
    
    function autenticacionInsertar()
    {
       const autenticacioninsertar = {
            id: uniquid(),
            id_perfil: id_perfil,
            nombre_usuario: nombre_usuario,
            contraseña:contraseña
         
        }

        console.log(autenticacioninsertar )

        axios.post(`/api/productos/agregar`,autenticacioninsertar ).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success',  title: 'El registro fue agregado exitosamente!', showConfirmButton: false, timer: 1500 })
            navigate('/')
            })
            .catch(err => {console.log(err.stack)})
    
    }

    function autenticacionRegresar()
    {
        //window.location.href="/";
        navigate('/autenticacion_listar')
    }

    return(
        <div>
            <Navbar />
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <img src="assets/img/Mi-dulce-Pecado.png" alt="logo" className="img-fluid mb-12"></img>
                        </div>
                        <h5 class="card-subtitle mb-2 text-muted text-center">Nuestro propósito Satisfacción</h5>

                        <div className="container-sm p-4 my-4 bg-light text-success">
                            <div className="row align-items-center text-center">
                                <div className="col-md-12">
                                    <div className="container-sm p-4 my-4 alig-center">
                                    </div>
                                    <h4 className="f-w-400">Sign up</h4>
                                    <hr></hr>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="nombre_Usuario" placeholder="Nombre de Usuario" value={nombre_usuario} onChange={(e) => { setNombreUsuario(e.target.value) }}></input>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" value={contraseña} onChange={(e) => { setContraseña(e.target.value) }}></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="id_Perfil" placeholder="Id Perfil" value={id_perfil} onChange={(e) => { setIdPerfil(e.target.value) }}></input>
                                    </div>
                                    <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                                        <label className="custom-control-label" for="customCheck1">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                                    </div>
                                    <div>
										<Link to={"/Login"} className="btn btn-block btn-primary">
                                        Ingresar
										</Link>	
                                    </div>									
                                    <hr></hr>
                                    <p className="mb-2">Ya tienes una cuenta? <a href="/Login" className="f-w-400">Signin</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

export default CrearCuenta;
