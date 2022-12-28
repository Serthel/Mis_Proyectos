import React from 'react';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import CategoriesMounth from '../componentes/CategoriesMonth';
import Navbar from '../componentes/Navbar';
import Modal from '../componentes/modal';
import MuestraProductos from '../componentes/MuestraProductos';
import Banner from '../componentes/Banner';


const PaginaPrincipal = () => {
    return (
        <div>
        <Navbar/>
        <ContentHeader/>
        <Modal/>
        <Banner/>
        <CategoriesMounth/>
        <MuestraProductos/>
        <Footer></Footer>
        </div>
    );
}

export default PaginaPrincipal;