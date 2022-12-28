import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesMounth = () => {
    return (


        <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Nuestros Tipos de dulces</h1>
                    <p>
                        Contamos con una gran diversidad de tipo de dulces, marcas
                         y presentaciones.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 p-5 mt-3">
                    <a href="#"><img src="./assets/img/MANI-MOTO-NATURAL-1501g_a.png"  width="200" height="200" className="rounded-circle img-fluid border" /></a>
                    <h5 className="text-center mt-3 mb-3">Nueces</h5>
                    <p className="text-center"><a className="btn btn-success">Añadir a Carrito</a></p>
                </div>
                <div className="col-12 col-md-3 p-5 mt-3">
                    <a href="#"><img src="./assets/img/Chocoramo-RAMO-x55-g_1140151.png" width="200" height="200" className="rounded-circle img-fluid border" /></a>
                    <h5 className="text-center mt-3 mb-3">Ponques</h5>
                    <p className="text-center"><a className="btn btn-success">Añadir a Carrito</a></p>
                </div>
                <div className="col-12 col-md-3 p-5 mt-3">
                    <a href="#"><img src="./assets/img/BON-BOM-BUM-FRESA_F.png" width="200" height="200" className="rounded-circle img-fluid border" /></a>
                    <h5 className="text-center mt-3 mb-3">Bombones</h5>
                    <p className="text-center"><a className="btn btn-success">Añadir a Carrito</a></p>
                </div>
                <div className="col-12 col-md-3 p-5 mt-3">
                    <a href="#"><img src="./assets/img/CHOCOLATE-JUMBO-FLOW-NEGRO_F.png" width="200" height="200" className="rounded-circle img-fluid border" /></a>
                    <h5 className="text-center mt-3 mb-3">Chocolates</h5>
                    <p className="text-center"><a className="btn btn-success">Añadir a Carrito</a></p>
                    
                </div>
            </div>
        </section>
    )

}

export default CategoriesMounth;