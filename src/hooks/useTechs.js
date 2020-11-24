import { useState, useEffect } from "react"

export const useTechs = () =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        var request = new XMLHttpRequest();
    
        request.open('GET', 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs?tech=Node');
    
        request.onreadystatechange = function( e ) {
            if (this.readyState === 4) {

                setState({
                    data: JSON.parse(this.responseText),
                    loading: false
                })      
    
            }
        };
        
        request.send();
            
    }, [])

    return state;

}