import React from 'react';
import hour from '../../icons/Ic_Hour.svg';
import hoffice from '../../icons/Ic_HomeOffice.svg';
import wshops from '../../icons/Ic_Workshops.svg';
import drinkSnaks from '../../icons/Ic_DrinkSnacks.svg';
import laptop from '../../icons/Ic_laptop.svg';
import brain from '../../icons/Ic_brain.svg';

export const Beneficios = () => {
    return (
        <section id = "Beneficios">
            <div className = "container">
                <div className = "wrapper">
                    <h2 className = "benefits-title">Entre los beneficios que ofrecemos se encuentran <strong className = "blue">;)</strong></h2>
                </div>
                <div className = "wrapper margin-items">
                    <div className = "col-2 items fadeIn">
                        <img src = { hour } alt = "Imagen de un reloj"/>
                        <p>Flexibilidad
                        <br/>Horaria</p>
                    </div>  
                    <div className = "col-2 items fadeIn">
                        <img src = { hoffice } alt = "Imagen de un escritorio"/>
                        <p>Home Office</p>
                    </div>
                    <div className = "col-2 items fadeIn">
                        <img src = { wshops } alt = "Imagen de trabajo en equipo y reuniones"/>
                        <p>Capacitaciones
                        <br/>y Workshops</p>
                    </div>
                    <div className = "col-2 items fadeIn">
                        <img src = { drinkSnaks } alt = "Imagen de snacks"/>
                        <p>Snacks, frutas
                        <br/>y bebidas gratis</p>
                    </div>
                    <div className = "col-2 items fadeIn">
                        <img src = { laptop } alt = "Imagen de Notebook"/>
                        <p>Semana
                        <br/>Remota</p>
                    </div>
                    <div className = "col-2 items fadeIn">
                        <img src = { brain } alt = "Imagen que simboliza inovación y redes"/>
                        <p>Trabajar
                        <br/>en últimas
                        <br/>Tecnologías</p>
                    </div>
                </div>
            <hr/>
            </div>
        </section>
    )
}
