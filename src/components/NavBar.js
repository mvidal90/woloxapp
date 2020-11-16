import React from 'react';
import logo from '../logo_full_color.svg';

export const NavBar = () => {
    return (
        <>
            <nav>
                <div className = "container">
                    <div className = "wrapper">
                        <div className = "col-6 menu">
                            <img src={ logo } alt = "Logo de Wolox" className = "logo"/>
                        </div>
                        <div className = "col-6 menu">
                            <a  href="#Inicio" className = "menu-item">Inicio</a>
                            <a href="#Beneficios" className = "menu-item">Beneficios</a>
                            <button 
                                className="btn-login"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
