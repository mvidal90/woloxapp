import React, { useEffect } from 'react';
import { ChangeTechs } from './ChangeTechs';
import { TechGrid } from './TechGrid';

export const ListTechs = ({ setHome, setMsg }) => {

    let stg = JSON.parse(localStorage.getItem('favorites'));

    useEffect(() => {
        setHome( false );
        if (!localStorage.getItem('favorites')) {
            setMsg(`Favoritos: 0`);
        } else {
            setMsg(`Favoritos: ${ stg.length }`);
        }
    }, [stg, setHome, setMsg]);

    return (
        <section id ="Techs">
            <div className = "container">
                <div className = "row">
                    <h2> WoloxApp </h2>
                    {/* <ChangeTechs setTechs = { setTechs }/> */}
                    <ol>
                        <TechGrid  stg = { stg }/>
                    </ol>
                </div>
            </div>
        </section>
    );
}
