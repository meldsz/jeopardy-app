import React from 'react';
import { shallow } from 'enzyme';
import { Category } from './Category';
import { category } from '../data/fixtures';

const props = { category };
describe('Category', () => {
    const categoryWrapper = shallow(<Category {...props} />);

    it('renders link to home', () => {
        expect(categoryWrapper.find('Link h4').text()).toEqual('Home');
    });

    it('renders category title', () => {
        expect(categoryWrapper.find('h2').text()).toEqual(props.category.title);
    });
});