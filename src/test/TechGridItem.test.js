import React from 'react';
import { shallow } from 'enzyme';
import { TechGridItem } from '../components/list/TechGridItem';

describe('Pruebas con <TechGridItem />', () => {

    test('Debe mostrarse correctamente', () => {
          
        const wrapper = shallow( <TechGridItem /> );

        expect( wrapper ).toMatchSnapshot(); 

    })

    
})
