import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { getProv } from '../../helpers/getProv';

export const Form = ({ setHome, setMsg }) => {

    useEffect(() => {
        setHome( false );
        setMsg('Registrate antes de empezar');
    }, [setHome, setMsg]);

    const [atc, setAtc] = useState( false );

    const [ registry , handleInputChange] = useForm ({
        name:'',
        lastname:'',
        country:'argentina',
        province:'',
        phone:'',
        email:'',
        password:'',
        password2:'',
        conditions: atc
    });

    const [error, setError] = useState({ state: false, error:''});
    
    const { name, lastname, country, province, phone, email, password, password2, conditions } = registry;
 
    const handleSubmit= ( e ) =>{
        const expr = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const exprPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (name.length>30) {
            e.preventDefault();
            setError({ state: true, error:'Tu nombre no puede superar los 30 caracteres.'})        
        } else if (lastname.length>30) {
            e.preventDefault();
            setError({ state: true, error:'Tu apellido no puede superar los 30 caracteres.'})        
        } else if (!expr.test(email)) {
            e.preventDefault();
            setError({ state: true, error:'Tu email no tiene un formato válido.'})        
        } else if (phone.length > 10) {
            e.preventDefault();
            setError({ state: true, error:'Tu teléfono no puede tener más de 10 caracteres.'})
        } else if (password < 6) {
            e.preventDefault();
            setError({ state: true, error:'Tu contraseña debe tener como mínimo 6 dígitos.'})
        } else if (!exprPass.test(password)) {
            e.preventDefault();
            setError({ state: true, error:'Tu contraseña debe tener al menos un número y una letra.'})        
        } else if (password !== password2) {
            e.preventDefault();
            setError({ state: true, error:'Tus contraseñas deben coincidir.'})
        } else if ( conditions === 'false') {
            e.preventDefault();
            setError({ state: true, error:'Debes aceptar términos y condiciones.'})
        } else {
            setError({ state: false, error:''})

            localStorage.setItem('registry', JSON.stringify( registry ));
        }
    }

    return (
        <section className="bg-form">
            <div className="container">
                <div className="wrapper">
                    <div className="col-6"></div>
                    <div className="col-5 formbox">
                        <form onSubmit={ handleSubmit }>
                            <p className="blue">Todos los campos son requeridos *</p>
                            <fieldset>
                                <legend>Datos personales</legend>
                                <div>
                                    <label htmlFor = "name">Nombre:</label>
                                    <br/>
                                    <input
                                        type = "text"
                                        name = "name"
                                        placeholder = "Ingresa tu nombre"
                                        value = { name }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div>
                                    <label htmlFor = "lastname">Apellido:</label>
                                    <br/>
                                    <input
                                        type = "text"
                                        name = "lastname"
                                        placeholder = "Ingresa tu apellido"
                                        value = { lastname }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div>
                                    <label htmlFor = "country">País:</label>
                                    <br/>
                                    <select
                                        type = "text"
                                        name = "country"
                                        placeholder = "Seleccioná tu país"
                                        value = { country }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                    >
                                        <option value="argentina">Argentina</option>
                                        <option value="brasil">Brasil</option>
                                        <option value="chile">Chile</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="uruguay">Uruguay</option>    
                                    </select>
                                </div><div className="">
                                    <label htmlFor = "province">Provincia:</label>
                                    <select
                                        type = "text"
                                        name = "province"
                                        placeholder = "Selccioná tu Provincia"
                                        value = { province }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                    >
                                        { getProv(country) }
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor = "email">eMail:</label>
                                    <br/>
                                    <input
                                        type = "text"
                                        name = "email"
                                        placeholder = "ejemplo@gmail.com"
                                        value = { email }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div>
                                    <label htmlFor = "phone">Teléfono:</label>
                                    <br/>
                                    <input
                                        type = "number"
                                        name = "phone"
                                        placeholder = "Ej: 1554567890"
                                        value = { phone }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </fieldset>    
                            <fieldset>
                                <legend>Creá tu contraseña</legend>
                                <div>
                                    <label htmlFor = "password">Contraseña:</label>
                                    <br/>
                                    <input
                                        type = "password"
                                        name = "password"
                                        placeholder = "Ingresá tu contraseña"
                                        value = { password }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                        aria-describedby = "expDesc"
                                    />
                                    <span id="expDesc" className="blue">Incluye una mayúscula, números y mínimo 6 caracteres.</span>
                                </div>
                                <div>
                                    <label htmlFor = "password2">Repetí la Contraseña:</label>
                                    <br/>
                                    <input
                                        type = "password"
                                        name = "password2"
                                        placeholder = "Ingresá tu contraseña"
                                        value = { password2 }
                                        onChange = { handleInputChange }
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </fieldset>
                                <input type="checkbox" name = "conditions" value = {!atc} onClick = { () => { setAtc( !atc )}} onChange = { handleInputChange }/>
                                <label htmlFor = "conditions">Acepto términos y condiciones</label>
                                <br/>

                                {
                                    conditions === 'true'  ? 
                                        <>
                                            <p className = "danger">{error.error}</p>
                                            <button type="submit" className= "btn-form" >
                                                Registrarse
                                            </button>
                                        </>
                                        :
                                        <>
                                            <p className = "danger">{error.error}</p>
                                            <button type="submit" className= "btn-disabled" disabled>
                                                Registrarse
                                            </button>
                                        </>
                                        
                                }  
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
