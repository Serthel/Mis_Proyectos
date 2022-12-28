import React from 'react';



const Banner = () =>{
    return (
<div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={1} />
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src="./assets/img/hombre-con-asiedad-por-los-dulces.jpg" alt />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left align-self-center">
                                    <h1 className="h1 text-success"><b>Mi Dulce Pecado</b></h1>
                                    <h3 className="h2">Nuestro propósito Satisfacción</h3>
                                    <p>
                                    Nuestro propósito es ser partícipes de los momentos especiales de cada uno de nuestros clientes.
                                        This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website.
                                        Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                                        <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                                        <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src="./assets/img/chocolates-candies-with-different-fillings-2860272.jpg" alt />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Chocolate</h1>
                                    <h3 className="h2">Ventajas del consumo del Chocolate</h3>
                                    <p>
                                    Es una fuente rica en almidón, grasas saludables, proteínas, vitamina A, ácido 
                                    fólico, fibra y antioxidantes. Ayuda a la circulación sanguínea. En dosis 
                                    moderadas ayuda a mejorar el síndrome de fatiga crónica. Reduce la tensión 
                                    arterial, por lo que puede considerarse un aliado de las personas hipertensas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src="./assets/img/origen-de-los-caramelos-dulces-1.jpg" alt />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left">
                                    <h1 className="h1">Caramelos</h1>
                                    <h3 className="h2">Ventajas del Consumo de Caramelos</h3>
                                    <p>
                                    Todo ello aporta múltiples beneficios a nuestro organismo,
                                     como por ejemplo mejorar el rendimiento, estimular el 
                                     desarrollo cognitivo y retrasar la sensación de fatiga por 
                                     su aporte energético
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                <i className="fas fa-chevron-left" />
            </a>
            <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                <i className="fas fa-chevron-right" />
            </a>
        </div>


    )

};


export default Banner ;