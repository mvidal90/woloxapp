import React, { useEffect } from 'react';
import { Beneficios } from './Beneficios.js';
import { Footer } from './Footer';
import { Inicio } from './Inicio';
import { Woloxers } from './Woloxers';

export const Page = ({ setHome }) => {

    useEffect(() => {
        setHome( true );
    }, [setHome]);

    return (
        <>
            <Inicio />
            <Woloxers />
            <Beneficios />
            <Footer />
        </>
    )
}
