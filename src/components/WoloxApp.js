import React from 'react';
import { Beneficios } from './Beneficios.js';
import { Footer } from './Footer';
import { Inicio } from './Inicio';
import { NavBar } from './NavBar';
import { Woloxers } from './Woloxers';

export const WoloxApp = () => {
    return (
        <>
            <NavBar />
            <Inicio />
            <Woloxers />
            <Beneficios />
            <Footer />
        </>
    )
}
