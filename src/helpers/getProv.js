
export const getProv = ( country ) =>{

    switch ( country ) {
        case 'argentina':
            return (
                <>
                    <option value = 'Buenos-Aires'>Buenos Aires</option>
                    <option value = 'Cordoba'>Córdoba</option>
                    <option value = 'Entre-Rios'>Entre Rios</option>
                    <option value = 'La-Pampa'>La Pampa</option>
                    <option value = 'Santan-Fe'>Buenos Aires</option>
                </>
            );
        case 'brasil':
            return (
                <>
                    <option value = 'Bahia'>Bahia</option>
                    <option value = 'Goias'>Goias</option>
                    <option value = 'Rio-de-Janeiro'>Rio de Janeiro</option>
                    <option value = 'Rio-Grande-do-Sul'>Rio Grande do Sul</option>
                    <option value = 'Santa-Catarina'>Santa Catarina</option>
                </>
            );

        case 'chile':
            return (
                <>
                    <option value= 'Antofagasta'>Antofagasta</option>
                    <option value= 'Concepcion'>Concepción</option>
                    <option value= 'Iquique'>Iquique</option>
                    <option value= 'Santiago'>Santiago</option>
                    <option value= 'Valparaiso'>Valparaiso</option>
                </>
            );
            
        case 'colombia':
            return (
                <>
                    <option value= 'Bolivar'>Bolivar</option>
                    <option value= 'Boyaca'>Boyacá</option>
                    <option value= 'Cordoba'>Córdoba</option>
                    <option value= 'Santander'>Santander</option>
                    <option value= 'Tolima'>Tolima</option>
                </>
            );
        case 'uruguay':
            return (
                <>
                    <option value= 'Colonia'>Colonia</option>
                    <option value= 'Montevideo'>Montevideo</option>
                    <option value= 'San-Jose'>San Jose</option>
                    <option value= 'Tacuarembo'>Tacuarembó</option>
                    <option value= 'Treinta-y-tres'>Treinta y tres</option>
                </>
            );
        default: 
            return <option></option>;
    }
}