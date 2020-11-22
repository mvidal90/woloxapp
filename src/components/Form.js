import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { getProv } from '../helpers/getProv';

export const Form = () => {

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
 
    console.log(registry)  

    const handleSubmit= ( e ) =>{
        e.preventDefault();
        const expr = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        const exprPass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (name.length>30) {
            setError({ state: true, error:'Tu nombre no puede superar los 30 caracteres.'})        
        } else if (lastname.length>30) {
            setError({ state: true, error:'Tu apellido no puede superar los 30 caracteres.'})        
        } else if (!expr.test(email)) {
            setError({ state: true, error:'Tu email no tiene un formato válido.'})        
        } else if (phone.length > 10) {
            setError({ state: true, error:'Tu teléfono no puede tener más de 10 caracteres.'})
        } else if (password < 6) {
            setError({ state: true, error:'Tu contraseña debe tener como mínimo 6 dígitos.'})
        } else if (!exprPass.test(password)) {
            setError({ state: true, error:'Tu contraseña debe tener al menos un número y una letra.'})        
        } else if (password !== password2) {
            setError({ state: true, error:'Tus contraseñas deben coincidir.'})
        } else if ( conditions === 'false') {
            setError({ state: true, error:'Debes aceptar términos y condiciones.'})
        } else {
            console.log(typeof(conditions))
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
                            <div>
                                <label htmlFor = "name">Nombre:</label>
                                <br/>
                                <input
                                    type = "text"
                                    name = "name"
                                    placeholder = "Tu nombre"
                                    value = { name }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor = "lastname">Apellido:</label>
                                <br/>
                                <input
                                    type = "text"
                                    name = "lastname"
                                    placeholder = "Tu apellido"
                                    value = { lastname }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor = "country">Pais:</label>
                                <br/>
                                <select
                                    type = "text"
                                    name = "country"
                                    placeholder = "Tu pais"
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
                                <label htmlFor = "province">Provincia:</label>
                                <br/>
                                <select
                                    type = "text"
                                    name = "province"
                                    placeholder = "Tu Provincia"
                                    value = { province }
                                    onChange = { handleInputChange }
                                    required
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
                                    placeholder = "email@tumail.com"
                                    value = { email }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor = "phone">Teléfono:</label>
                                <br/>
                                <input
                                    type = "number"
                                    name = "phone"
                                    placeholder = "12-3456-7890"
                                    value = { phone }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor = "password">Contraseña:</label>
                                <br/>
                                <input
                                    type = "password"
                                    name = "password"
                                    placeholder = "PassWord"
                                    value = { password }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor = "password2">Repita Contraseña:</label>
                                <br/>
                                <input
                                    type = "password"
                                    name = "password2"
                                    placeholder = "PassWord"
                                    value = { password2 }
                                    onChange = { handleInputChange }
                                    required
                                />
                            </div>
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
