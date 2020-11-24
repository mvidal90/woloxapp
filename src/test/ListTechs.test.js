import React from 'react';
import { shallow } from 'enzyme';
import { ListTechs } from '../components/list/ListTechs';

describe('Pruebas con <ListTechs />', () => {

    test('Debe mostrarse correctamente', () => {
          
        const wrapper = shallow( <ListTechs /> );

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('TechGrid').length).toBe(1);
        expect( wrapper.find('h2').length).toBe(1);
        

    })

})
