import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo_full_color.svg';
import { Burguer } from './Burguer';

export const NavBar = ({ home, msg }) => {

    window.onscroll = function (e) {  

        const element = document.getElementById("nav");
            
        element.classList.add("nav-white");

    } 

    return (
        <>
            <nav id = "nav">
                <div className = "container nav-scroll">
                    <div className = "wrapper">
                        <div className = "col-6 img-logo">
                            <Link to="/">
                                <img src={ logo } alt = "Logo de Wolox" className = "logo"/>
                            </Link>
                        </div>
                        <div className = "col-6 abs">
                            <div>
                                {
                                    home ?
                                    <>
                                        <Burguer />
                                    </> :
                                    <>
                                        <p className = "msg">{ msg }</p>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
