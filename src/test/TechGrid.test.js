import React from 'react';
import { shallow } from 'enzyme';
import { TechGrid } from '../components/list/TechGrid';

import { useTechs } from '../hooks/useTechs';
jest.mock('../hooks/useTechs');

describe('Pruebas con <TechGrid />', () => {

    test('Debe mostrarse correctamente mientras se consiguen los ítems', () => {

        useTechs.mockReturnValue({
            data:[],
            loading: true
        });
          
        const wrapper = shallow( <TechGrid /> );

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('TechGridItem').length).toBe(0);

    })

    test('Debe mostrarse correctamente cuando se muestran los ítems', () => {

        useTechs.mockReturnValue({
            data:[
                {
                  tech: "Node",
                  year: "2009",
                  author: "Ryan Dahl",
                  license: "MIT",
                  language: "JavaScript",
                  type: "Back-End",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png"
                },
                {
                  tech: "React",
                  year: "2013",
                  author: "Jordan Walke",
                  license: "MIT",
                  language: "JavaScript",
                  type: "Front-End",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"
                },
                {
                  tech: "Vue",
                  year: "2014",
                  author: "Evan You",
                  license: "MIT",
                  language: "JavaScript",
                  type: "Front-End",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png"
                }],
            loading: false
        });
          
        const wrapper = shallow( <TechGrid /> );

        expect( wrapper ).toMatchSnapshot(); 
        expect( wrapper.find('TechGridItem').length).toBe(3);

    })

})
