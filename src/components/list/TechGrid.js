import React, { useState } from 'react';
import { useTechs } from '../../hooks/useTechs';
import { TechGridItem } from './TechGridItem';

export const TechGrid = ( {stg} ) => {

    const { data, loading } = useTechs();
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))

    const handleFavorites = (e) => {

        localStorage.setItem('favorites', JSON.stringify( favorites ))

    }

    return (    
    <>
        { loading && <p>Loading</p> }
        <div className = "wrapper">
        
            {
                data.map( tech => (
                    <TechGridItem 
                        stg = { stg }
                        favorites = { favorites }
                        setFavorites = { setFavorites }
                        handleFavorites = { handleFavorites }
                        key={ tech.tech }
                        { ...tech }
                    />
                )) 
            }
        
        </div>
        <div>
            <p>Total de tecnologías: {data.length}</p>
        </div>
    </>       
)
}
