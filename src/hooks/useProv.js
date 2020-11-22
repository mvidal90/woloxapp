import { useState, useEffect } from "react"
import { getProv } from '../helpers/getProv';

export const useProv = ( country ) =>{

    const [stateProvs, setStateProvs] = useState({
        provincies: [],
    });

    useEffect( () =>{
                         
        const { provincies } = getProv( country );
        setStateProvs(provincies);

    }, [country])

    return stateProvs;

}