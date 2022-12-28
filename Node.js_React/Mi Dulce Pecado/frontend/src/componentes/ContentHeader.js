import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const ContentHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand text-success logo h1 align-self-center" href="/">
            Mi Dulce Pecado
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Inicio</a>
                </li>
                 <li className="nav-item">
                  <NavDropdown title="Carrito de Compras" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Carritocompra_Listar">Carrito de Compras</NavDropdown.Item>
                  <NavDropdown.Item href="/Factura_listar">Facturas</NavDropdown.Item>
                  <NavDropdown.Item href="/Comentario_Listar">Comentarios</NavDropdown.Item>
                   <NavDropdown.Item href="/Infoenvio_Listar">Datos de Envio</NavDropdown.Item>
                </NavDropdown>
                </li>
                <li className="nav-item">
                  <NavDropdown title="Producto" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Producto_Listar">Productos</NavDropdown.Item>
                  <NavDropdown.Item href="/Categoria_Listar">Categorias</NavDropdown.Item>
                </NavDropdown>
                </li>
                <li className="nav-item">
                  <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Usuario_Listar">Usuarios</NavDropdown.Item>
                  <NavDropdown.Item href="/Perfil_Listar">Perfil</NavDropdown.Item>
                  <NavDropdown.Item href="/Autenticacion_Listar">Datos de ingreso</NavDropdown.Item>
                </NavDropdown>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Login">Login</a>
                </li>
                </ul>
              </div>

                <div className="navbar align-self-center d-flex">
                  <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                    <div className="input-group">
                      <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                      <div className="input-group-text">
                        <i className="fa fa-fw fa-search" />
                      </div>
                    </div>
                  </div>
                  <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                    <i className="fa fa-fw fa-search text-dark mr-2" />
                  </a>
                  <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                  </a>
                  <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-user text-dark mr-3" />
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                  </a>
                </div>
            
            </div>
          </div>
      </nav>
    </div>

  );
}

export default ContentHeader;