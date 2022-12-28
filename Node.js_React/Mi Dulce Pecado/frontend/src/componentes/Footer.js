import React from 'react';


const Footer = () => {
    return (

        <div>
            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light logo">Mi Dulce Pecado</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw" />
                                    Bogotá D.C, Colombia
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw" />
                                    <a className="text-decoration-none" href="#">322-xxx-xxxx</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw" />
                                    <a className="text-decoration-none" href="mailto:info@company.com">info@midulcepecado.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Chocolates</a></li>
                                <li><a className="text-decoration-none" href="#">Caramelos</a></li>
                                <li><a className="text-decoration-none" href="#">Gomas</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">Opciones</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li><a className="text-decoration-none" href="#">Inicio</a></li>
                                <li><a className="text-decoration-none" href="#">Carrito de Compras</a></li>
                                <li><a className="text-decoration-none" href="#">Productos</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light" />
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                <div className="input-group-text btn-success text-light">Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 bg-black py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright © 2022
                                    Sergio Andres Palacios Osma,  
                                    | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    );
}

export default Footer;