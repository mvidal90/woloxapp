import React, { useEffect, useState } from 'react';

export const TechGridItem = ({
    tech,
    year,
    author,
    license,
    language,
    type,
    logo,
    stg,
    favorites,
    setFavorites,
    handleFavorites
}) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const add = () =>{
        setIsFavorite( true );
        if (favorites === null) {
            setFavorites([tech]);
        } else {
            setFavorites([...favorites, tech]);
        }
    };

    const del = () =>{
        setIsFavorite( false );
        setFavorites(favorites.filter(e => e !== tech))
    };

    useEffect(() => {

        if (stg !== null) {
            if (stg.includes( tech )) {
            
                setIsFavorite( true );
            }
        }
    }, [stg, tech])
    
    
    return (
        <div  className="card">
            <div className = "logos-container">
                <img src={ logo } alt={ tech } className = "img-size" />
            </div>
            <div className = "data-container">
                <h4>{ tech } ( { year } )</h4>
                <p><strong>Autor: </strong> { author } </p> 
                <p><strong>Licencia: </strong> { license } </p> 
                <p><strong>Lenguaje: </strong> { language } </p> 
                <p><strong>Tipo: </strong> { type } </p> 
            </div>

            <form onSubmit = { handleFavorites }>
                {
                    isFavorite ?
                        <button className = "btn-tch2" onClick = { del }>Quitar de Favoritos</button>
                    :
                        <button className = "btn-tch" onClick = { add } >Agregar a Favoritos</button>
                }
            </form>

        </div>
    )
}
