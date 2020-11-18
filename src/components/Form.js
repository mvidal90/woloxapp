import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Options } from './Options';
import { ProvReducer } from './ProvReducer';

export const Form = () => {

    const [ registry , handleInputChange] = useForm ({
        name:'',
        lastname:'',
        country:'',
        provincies:'',
        phone:'',
        email:'',
        password:'',
        password2:'',
        conditions: false
    });

    const [error, setError] = useState({ state: false, error:''});
    
    const { name, lastname, country, province, phone, email, password, password2, conditions } = registry;
    // useEffect( ({country}) => {
    //     const  provincies   = ProvReducer( {country} );
        
    //     return provincies
    // }, [{country}]);
    
    // console.log(provincies)
        
    console.log( registry )

    const handleSubmit= ( e ) =>{
        e.preventDefault();
        const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const exprPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            
        if (name.length>30) {
            setError({ state: true, error:'Tu nombre no puede superar los 30 caracteres.'})        
        } else if (lastname.length>30) {
            setError({ state: true, error:'Tu apellido no puede superar los 30 caracteres.'})        
        } else if (!expr.test(email)) {
            setError({ state: true, error:'Tu email no tiene un formato válido.'})        
        } else if (phone.lenght <= 10) {
            setError({ state: true, error:'Tu teléfono no puede tener más de 10 caracteres.'})
        } else if (password<6) {
            setError({ state: true, error:'Tu contraseña debe tener como mínimo 6 dígitos.'})
        } else if (!exprPass.test(password)) {
            setError({ state: true, error:'Tu contraseña debe tener al menos un número y una letra.'})        
        } else if (password !== password2) {
            setError({ state: true, error:'Tus contraseñas deben coincidir.'})
        } else if ( conditions === false) {
            setError({ state: true, error:'Debes aceptar términos y condiciones.'})
        } else {
            localStorage.setItem('registry', JSON.stringify( registry ));
        }
    }

    return (
        <div className="bg-form">
            <div className="container">
                <div className="wrapper">
                    <div className="col-6"></div>
                    <div className="col-5 formbox">
                        <form onSubmit={ handleSubmit }>
                            <div className="">
                                <label for = "name">Nombre:</label>
                                <br/>
                                <input
                                    type = "text"
                                    name = "name"
                                    className = ""
                                    placeholder = "Tu nombre"
                                    autoComplete = "off"
                                    value = { name }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div className="">
                                <label for = "lastname">Apellido:</label>
                                <br/>
                                <input
                                    type = "text"
                                    name = "lastname"
                                    className = ""
                                    placeholder = "Tu nombre"
                                    autoComplete = "off"
                                    value = { lastname }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div><div className="">
                                <label for = "country">Pais:</label>
                                <br/>
                                <select
                                    type = "text"
                                    name = "country"
                                    className = ""
                                    autoComplete = "off"
                                    value = { country }
                                    onChange = { handleInputChange }
                                    required
                                >
                                    <option value="argentina">Argentina</option>
                                    <option value="brasil">Brasil</option>
                                    <option value="chile">Chile</option>
                                    <option value="colombia">Colombia</option>
                                    <option value="uruguay">Uruguay</option>    
                                </select>
                            </div><div className="">
                                <label for = "province">Provincia:</label>
                                <br/>
                                <select
                                    type = "text"
                                    name = "province"
                                    className = ""
                                    placeholder = "Tu nombre"
                                    autoComplete = "off"
                                    value = { province }
                                    onChange = { handleInputChange }
                                    //required
                                >
                                    {
                                        // provincies.map( prov => (
                                        //     <Options
                                        //         key = { prov.name }
                                        //         {...prov}
                                        //     />
                                        // ))
                                        }
                                </select>
                            </div>
                            <div className="">
                                <label for = "email">eMail:</label>
                                <br/>
                                <input
                                    type = "text"
                                    name = "email"
                                    className = ""
                                    placeholder = "email@gmail.com"
                                    autoComplete = "off"
                                    value = { email }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div className="">
                                <label  name = "phone">Teléfono:</label>
                                <br/>
                                <input
                                    type = "number"
                                    name = "phone"
                                    className = ""
                                    placeholder = "12-3456-7890"
                                    autoComplete = "off"
                                    value = { phone }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div className="">
                                <label for = "password">Contraseña:</label>
                                <br/>
                                <input
                                    type = "password"
                                    name = "password"
                                    className = "form-control"
                                    placeholder = "PassWord"
                                    value = { password }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div className="">
                                <label for = "password2">Repita Contraseña:</label>
                                <br/>
                                <input
                                    type = "password"
                                    name = "password2"
                                    className = "form-control"
                                    placeholder = "PassWord"
                                    value = { password2 }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <input type="checkbox" name = "conditions" value={ !conditions } onChange = { handleInputChange }/><label for="conditions">Acepto términos y condiciones</label>
                            <br/>

                            {
                                conditions ? 
                                    <>
                                        <p className = "danger">{error.error}</p>
                                        <button type="submit" className= "btn-form" >
                                            Registrarse
                                        </button>
                                    </>
                                    :
                                    <button type="submit" className= "btn-disabled" disabled>
                                        Registrarse
                                    </button>
                                    
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
