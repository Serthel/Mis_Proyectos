import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke.js';
import swal from 'sweetalert';
import Navbar from '../../componentes/Navbar.js';
import Footer from '../../componentes/Footer.js';


function Login()
{

	//para redireccionar de un componente a otro
	const navigate = useNavigate();

	//definimos el estado inicial de las variables
	const [usuario, setUsuario] = useState({
		email: '',
		password: ''
	});

	const { email, password } = usuario;

	const onChange = (e) => {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value
		})
	}

	useEffect(() => {
		document.getElementById("email").focus();
	}, [])

	const iniciarSesion = async () => {
		if (password.length < 6) {
			const msg = "La contraseña debe ser al menos de 6 caracteres.";
			swal({
				title: 'Error',
				text: msg,
				icon: 'error',
				buttons: {
					confirm: {
						text: 'Ok',
						value: true,
						visible: true,
						className: 'btn btn-danger',
						closeModal: true
					}
				}
			});
		} else {
			const data = {
				email: usuario.email,
				password: usuario.password
			}
			const response = await APIInvoke.invokePOST(`/api/auth`, data);
			const mensaje = response.msg;

			if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta') {
				const msg = "No fue posible iniciar la sesión verifique los datos ingresados.";
				swal({
					title: 'Error',
					text: msg,
					icon: 'error',
					buttons: {
						confirm: {
							text: 'Ok',
							value: true,
							visible: true,
							className: 'btn btn-danger',
							closeModal: true
						}
					}
				});
			} else {
				
				//obtenemos el token de acceso jwt
				const jwt = response.token;

				//guardamos el token en el localstorage
				localStorage.setItem('token', jwt);

				//redireccionamos al home la pagina principal
				navigate("/");
			}
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();
		iniciarSesion();
	}


	return (
		<div>
			<Navbar />
			<section>

				<div className="card">
					<div className="card-body">
						<div className="text-center">
						 <a href="/">
							<img  src="assets/img/Mi-dulce-Pecado.png" alt="logo"></img>
						 </a>
						</div>
						<h5 class="card-subtitle mb-2 text-muted text-center">Nuestro propósito Satisfacción</h5>

						<div className="container-sm p-4 my-4 bg-light text-success">
							<div className="row">
								<div className="col-md-12">
									<div>
										<form className="md-float-material" onSubmit={onSubmit}>
											<h3 className="text-center txt-primary">
												Iniciar sesión
											</h3>
											<div className="row text-center">

												<div className="text-center">
													<label>Email</label>
												</div>

												<div className="col-md-12">
													<div className="md-input-wrapper">
														<input type="text"
															className="md-form-control"
															placeholder="Email"
															id="email"
															name="email"
															value={email}
															onChange={onChange}
															required>
														</input>

													</div>
												</div>

												<div className="text-center">
													<label>Contraseña</label>
												</div>

												<div className="col-md-12">
													<div className="md-input-wrapper">
														<input type="password" className="md-form-control"
															placeholder="Contraseña"
															id="password"
															name="password"
															value={password}
															onChange={onChange}
															required>
														</input>

													</div>
												</div>
											
												<div>
													<div className="col-md-12">

														<button type='submit' className="btn btn-primary btn-md btn-block text-center m-b-20">
															Ingresar
														</button>
													</div>
												</div>
												<hr></hr>
												<div className="col-sm-12 col-xs-12 text-center">
													<span className="txt-primary">No tienes cuenta?</span>
													<div>
														<Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
															Crear Cuenta
														</Link>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
    )
}

export default Login;