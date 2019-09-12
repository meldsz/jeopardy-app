import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { categories } from '../data/fixtures';

const props = { categories };

describe('App', () => {
    const app = shallow(<App {...props} />);
    it('renders title', () => {
        expect(app.find('h2').text()).toEqual('Jeopardy!');
    });

    it('renders correct number of links', () => {
        expect(app.find('Link').length).toEqual(props.categories.length);
    });

    it('renders categories title', () => {
        app.find('h4').forEach((linkTitle, index) => {
            expect(linkTitle.text()).toEqual(categories[index].title);
        });
    });
})