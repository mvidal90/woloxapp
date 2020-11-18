import React from 'react';
import { Beneficios } from './Beneficios.js';
import { Footer } from './Footer';
import { Inicio } from './Inicio';
import { Woloxers } from './Woloxers';

export const Page = () => {
    return (
        <>
            <Inicio />
            <Woloxers />
            <Beneficios />
            <Footer />
        </>
    )
}
