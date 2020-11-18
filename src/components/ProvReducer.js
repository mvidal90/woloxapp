import { useState } from "react";

export const ProvReducer = ( country ) =>{

    const [provinces, setProvinces] = useState({});

    switch ( country ) {
        case 'argentina':
            setProvinces([ {name: 'Buenos Aires'},{name: 'Córdoba'}, {name: 'Entre Rios'}, {name: 'La Pampa'}, {name: 'Santan Fe'}]);
            return provinces;

        case 'brasil':
            setProvinces([ {name: 'Bahia'}, {name: 'Goias'}, {name: 'Rio de Janeiro'}, {name: 'Rio Grande do Sul'}, {name: 'Santa Catarina'} ]);
            return provinces;

        case 'chile':
            setProvinces([ {name: 'Antofagasta'}, {name: 'Concepción'}, {name: 'Iquique'}, {name: 'Santiago'}, {name: 'Valparaiso'} ]);
            return provinces;
            
        case 'colombia':
            setProvinces([ {name: 'Bolivar'}, {name: 'Boyacá'}, {name: 'Córdoba'}, {name: 'Santander'}, {name: 'Tolima'} ]);
            return provinces; 

        case 'uruguay':
            setProvinces([ {name: 'Colonia'}, {name: 'Montevideo'}, {name: 'San Jose'}, {name: 'Tacuarembó'}, {name: 'Treinta y tres}'} ]);
            return provinces;

        default:
            return provinces;
    }
}