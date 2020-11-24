import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import burguer from '../../icons/square.svg'

export const Burguer = () => {

    const [menu, setMenu] = useState(true);
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        if (window.screen.width < 1000) {
            setMenu (false);
         }
    }, [])

    const showMenu = () => {

        if (display) {
            
            document.getElementById("menu").style.display = "block";
            setDisplay(false);
            
        } else {

            document.getElementById("menu").style.display = "none";
            setDisplay(true);
            
        }
    }


    return (
        <>
            {
                menu ?
                    <ul className = "menu">
                        <li><a  href="#Inicio" className = "menu-item">Inicio</a></li>
                        <li><a href="#Beneficios" className = "menu-item">Beneficios</a></li>
                        <li>
                            <NavLink exact to="/woloxtechs">
                                <button 
                                    className="btn-login"
                                >
                                    Login
                                </button>
                            </NavLink> 
                        </li>        
                    </ul>
                    :
                    <>
                        <button className = "burguer" onClick = { showMenu }><img src = { burguer } className = "burguer-icon"/></button>
                        {/* <div id = "menu" className = "wrapper"> */}
                            <ul id = "menu" className = "menu">
                                <li><a  href="#Inicio" className = "menu-item">Inicio</a></li>
                                <li><a href="#Beneficios" className = "menu-item">Beneficios</a></li>
                                <li>
                                    <NavLink exact to="/woloxtechs">
                                        <button 
                                            className="btn-login"
                                        >
                                            Login
                                        </button>
                                    </NavLink> 
                                </li>        
                            </ul>

                        {/* </div> */}
                        
                    </>
            }
        </>
    )
}
