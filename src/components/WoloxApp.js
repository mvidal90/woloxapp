import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NavBar } from './navbar/NavBar';
import { Page } from './page/Page.js';
import { Form } from './form/Form.js';
import { ListTechs } from './list/ListTechs';


export const WoloxApp = () => {

    const [home, setHome] = useState(true);
    const [msg, setMsg] = useState('');

    const ls = !localStorage.getItem('registry');

    return (
        <BrowserRouter>
            <NavBar ls = { ls } home = { home } msg = { msg } />
            <Switch>
                <Route exact path="/" component={ () => <Page setHome = { setHome }/> }/>

                <Route exact path="/woloxtechs" component={ () =>
                    ls ? <Form setHome = { setHome } setMsg = { setMsg }/> : <ListTechs setHome = { setHome } setMsg = { setMsg }/> }
                />

                <Redirect to="/"/>

            </Switch>
        </BrowserRouter>
    )
}
