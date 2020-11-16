import React from 'react';
import hour from '../icons/Ic_Hour.svg';
import hoffice from '../icons/Ic_HomeOffice.svg';
import wshops from '../icons/Ic_Workshops.svg';
import drinkSnaks from '../icons/Ic_DrinkSnacks.svg';
import laptop from '../icons/Ic_laptop.svg';
import brain from '../icons/Ic_brain.svg';

export const Beneficios = () => {
    return (
        <section id = "Beneficios">
            <div className = "container">
                <div className = "wrapper">
                    <h2 className = "benefits-title">Entre los beneficios que ofrecemos se encuentran ;)</h2>
                </div>
                <div className = "wrapper margin-items">
                    <div className = "col-2 items">
                        <img src = { hour } alt = "Imagen de un reloj"/>
                        <p>Flexibilida
                        <br/>Horaria</p>
                    </div>  
                    <div className = "col-2 items">
                        <img src = { hoffice } alt = "Imagen de un escritorio"/>
                        <p>Home Office</p>
                    </div>
                    <div className = "col-2 items">
                        <img src = { wshops } alt = "Imagen de trabajo en equipo y reuniones"/>
                        <p>Capacitaciones
                        <br/>y Workshops</p>
                    </div>
                    <div className = "col-2 items">
                        <img src = { drinkSnaks } alt = "Imagen de snacks"/>
                        <p>Snacks, frutas
                        <br/>y bebidas gratis</p>
                    </div>
                    <div className = "col-2 items">
                        <img src = { laptop } alt = "Imagen de Notebook"/>
                        <p>Semana
                        <br/>Remota</p>
                    </div>
                    <div className = "col-2 items">
                        <img src = { brain } alt = "Imagen que simboliza inovación y redes"/>
                        <p>Trabajar
                        <br/>en últimas
                        <br/>Tecnologías</p>
                    </div>
                </div>
            <hr />
            </div>
        </section>
    )
}
