import React from 'react';
import hero from '../../Img/Ic_ilustra_Hero@3x.png';

export const Inicio = () => {
    return (
        <section id="Inicio">
            <div className = "contariner">
                <div className="wrapper">
                    <div className="col-7">
                        <div className = "main-title">
                            <h2>Bienvenido a tu 
                                <strong> Entrevista Técnica</strong> en
                                <strong className = "greenWolox"> Wolox</strong>
                            </h2>
                        </div>
                    </div>
                    <div className = "col-5">
                        <div className = "img-container">
                            <img src = { hero } className = "hero-img animation-right" alt = "Imagen Hero, representa el trabajo en equipo y constante inovación tecnológica"/> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
