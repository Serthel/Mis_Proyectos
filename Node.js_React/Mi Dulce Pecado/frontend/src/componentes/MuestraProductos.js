import React from 'react';

const MuestraProductos = () => {
    return (
        <div>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Productos destacados del Mes</h1>
                            <p>
                            Estos son los productos destacados para este mes para 
                            que se permitan disfrutar de su agradable sabor   
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img src="./assets/img/Barrilete.png" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                        </li>
                                        <li className="text-muted text-right">$ 8,790</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Barrilete/Bolsa x 40 Unidades</a>
                                    <p className="card-text">
                                    Barra masticable con sabor original a barrilete, con su mágico tricolor de siempre . Ahora con 50% mas contnido por barra .
                                    </p>
                                    <p className="text-muted">Reviews (24)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img src="./assets/img/PLEGADIZA-SUPERCOCO-BARRA-CEREAL-X-6-UNDS(0).png" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                            <i className="text-muted fa fa-star" />
                                        </li>
                                        <li className="text-muted text-right">$8.400</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Supercoco Barra con Cereal/Display x 6 Unidades</a>
                                    <p className="card-text">
                                    Supercoco ahora en una deliciosa barra con cereal. Presentación Display x 6 Unidades
                                    </p>
                                    <p className="text-muted">Reviews (48)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card h-100">
                                <a href="#">
                                    <img src="./assets/img/Bolsa-Bianchi-CHOCOLATE.png" width="60" height="350" className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                            <i className="text-warning fa fa-star" />
                                        </li>
                                        <li className="text-muted text-right">$7.490</li>
                                    </ul>
                                    <a href="#" className="h2 text-decoration-none text-dark">Bianchi Chocobombones Pasión Frutal/Bolsa x 30 Unidades</a>
                                    <p className="card-text">
                                    Deliciosos Bombones de chocolate de leche con centro sabor frutal de cereza y naranja. Una combinación y balance perfecto de sabores. Ideal para regalar! Presentación Bolsa x 30 Unidades
                                    </p>
                                    <p className="text-muted">Reviews (74)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}

export default MuestraProductos;