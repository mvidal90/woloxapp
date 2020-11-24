import React, { useState } from 'react';

export const ChangeTechs = ({ setTechs }) => {

    const [inputValue, setInputValue] = useState('hola');

    const handleSubmit = (e) => {
        e.preventDefault();

        setTechs( techs => [ inputValue ]);
    }

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    return (
        <div className = "container">
            <div className = "row">
                <form onSubmit={ handleSubmit }>
                    <input 
                        type = "Text"
                        placeholder = "Busca tu tecnología"
                        value = { inputValue }
                        onChange = { handleInputChange }
                    />
                </form>
            </div>
        </div>
    )
}
