import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './paginas/auth/login';
import CrearCuenta from './paginas/auth/CrearCuenta';
import PaginaPrincipal from './paginas/paginaprincipal';
import AutenticacionAgregar from './paginas/autenticacion/autenticacion_agregar';
import Autenticacion_Borrar from './paginas/autenticacion/autenticacion_borrar';
import AutenticacionEditar from './paginas/autenticacion/autenticacion_editar';
import Autenticacion_Listar from './paginas/autenticacion/autenticacion_listar';
import CarritocompraAgregar from './paginas/carritocompra/carritocompra_agregar';
import Carritocompra_Borrar from './paginas/carritocompra/carritocompra_borrar';
import CarritocompraEditar from './paginas/carritocompra/carritocompra_editar';
import Carritocompra_Listar from './paginas/carritocompra/carritocompra_listar';
import CategoriaAgregar from './paginas/categoria/categoria_agregar';
import Categoria_Borrar from './paginas/categoria/categoria_borrar';
import CategoriaEditar from './paginas/categoria/categoria_editar';
import Categoria_Listar from './paginas/categoria/categoria_listar';
import ComentarioAgregar from './paginas/comentario/comentario_agregar';
import Comentario_Borrar from './paginas/comentario/comentario_borrar';
import ComentarioEditar from './paginas/comentario/comentario_editar';
import Comentario_Listar from './paginas/comentario/comentario_listar';
import Factura_Agregar from './paginas/factura/factura_agregar';
import Factura_Borrar from './paginas/factura/factura_borrar';
import FacturaEditar from './paginas/factura/factura_editar';
import Factura_listar from './paginas/factura/factura_listar';
import InfoenvioAgregar from './paginas/infoenvio/infoenvio_agregar';
import Infoenvio_Borrar from './paginas/infoenvio/infoenvio_borrar';
import InfoenvioEditar from './paginas/infoenvio/infoenvio_editar';
import Infoenvio_Listar from './paginas/infoenvio/infoenvio_listar';
import PerfilAgregar from './paginas/perfil/perfil_agregar';
import Perfil_Borrar from './paginas/perfil/perfil_borrar';
import PerfilEditar from './paginas/perfil/perfil_editar';
import Perfil_Listar from './paginas/perfil/perfil_listar';
import ProductoAgregar from './paginas/producto/producto_agregar';
import Producto_Borrar from './paginas/producto/producto_borrar';
import ProductoEditar from './paginas/producto/producto_editar';
import Producto_Listar from './paginas/producto/producto_listar';
import UsuarioAgregar from './paginas/usuario/usuario_agregar';
import Usuario_Borrar from './paginas/usuario/usuario_borrar';
import UsuarioEditar from './paginas/usuario/usuario_editar';
import Usuario_Listar from './paginas/usuario/usuario_listar';



function App() {
  return (
  
    <main className='App'>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" exact element={<Login />} />
            <Route path="/crear-cuenta" exact element={<CrearCuenta />} />
            <Route path="/" exact element={<PaginaPrincipal />} />
            <Route path="/AutenticacionAgregar" exact element={<AutenticacionAgregar />} />
            <Route path="/Autenticacion_Borrar" exact element={<Autenticacion_Borrar />} />
            <Route path="/autenticacion_editar/:id" exact element={<AutenticacionEditar />} />
            <Route path="/Autenticacion_Listar" exact element={<Autenticacion_Listar />} />
            <Route path="/CarritocompraAgregar" exact element={<CarritocompraAgregar />} />
            <Route path="/Carritocompra_Borrar" exact element={<Carritocompra_Borrar />} />
            <Route path="/carritocompra_editar/:id" exact element={<CarritocompraEditar />} />
            <Route path="/Carritocompra_Listar" exact element={<Carritocompra_Listar />} />
            <Route path="/CategoriaAgregar" exact element={<CategoriaAgregar />} />
            <Route path="/Categoria_Borrar" exact element={<Categoria_Borrar />} />
            <Route path="/categoria_editar/:id" exact element={<CategoriaEditar />} />
            <Route path="/Categoria_Listar" exact element={<Categoria_Listar />} />
            <Route path="/ComentarioAgregar" exact element={<ComentarioAgregar />} />
            <Route path="/Comentario_Borrar" exact element={<Comentario_Borrar />} />
            <Route path="/comentario_editar/:id" exact element={<ComentarioEditar />} />
            <Route path="/Comentario_Listar" exact element={<Comentario_Listar />} />
            <Route path="/Factura_Agregar" exact element={<Factura_Agregar />} />
            <Route path="/Factura_Borrar" exact element={<Factura_Borrar />} />
            <Route path="/factura_editar/:id" exact element={<FacturaEditar />} />
            <Route path="/Factura_listar" exact element={<Factura_listar />} />
            <Route path="/InfoenvioAgregar" exact element={<InfoenvioAgregar />} />
            <Route path="/Infoenvio_Borrar" exact element={<Infoenvio_Borrar />} />
            <Route path="/infoenvio_editar/:id" exact element={<InfoenvioEditar />} />
            <Route path="/Infoenvio_Listar" exact element={<Infoenvio_Listar />} />
            <Route path="/PerfilAgregar" exact element={<PerfilAgregar />} />
            <Route path="/Perfil_Borrar" exact element={<Perfil_Borrar />} />
            <Route path="/perfil_editar/:id" exact element={<PerfilEditar />} />
            <Route path="/Perfil_Listar" exact element={<Perfil_Listar />} />
            <Route path="/ProductoAgregar" exact element={<ProductoAgregar />} />
            <Route path="/Producto_Borrar" exact element={<Producto_Borrar />} />
            <Route path="/producto_editar/:id" exact element={<ProductoEditar />} />
            <Route path="/Producto_Listar" exact element={<Producto_Listar />} />
            <Route path="/UsuarioAgregar" exact element={<UsuarioAgregar />} />
            <Route path="/Usuario_Borrar" exact element={<Usuario_Borrar />} />
            <Route path="/usuario_editar/:id" exact element={<UsuarioEditar />} />
            <Route path="/Usuario_Listar" exact element={<Usuario_Listar />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </main>

  );
}

export default App;

