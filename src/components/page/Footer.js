import React from 'react';
import wlx from '../../icons/Ic_Wolox_Footer.svg';

export const Footer = () => {
    return (
        <footer>
         
                <div className = "margin-items">
                    <h2>Gracias por <strong className = "blue">completar el ejercicio</strong></h2>
                    <h3>Te invitamos a ver mas información</h3>
                    <a href="https://www.wolox.com.ar/" target="_blank"><button className = "btn-footer">Conocer más</button></a>
                </div>
        
            <img src = { wlx } className = "wolox-footer" alt = "Logo de Wolox"/>
        </footer>
    )
}
