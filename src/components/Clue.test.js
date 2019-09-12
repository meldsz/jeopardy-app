import React from 'react';
import { shallow } from 'enzyme';
import Clue from './Clue';
import { clue } from '../data/fixtures';

const props = { clue };
describe('Clue', () => {
    let clueWrapper = shallow(<Clue {...props} />);
    it('sets `reveal` to false', () => {
        expect(clueWrapper.state().reveal).toBe(false);
    });

    it('renders value', () => {
        expect(clueWrapper.find('h5').text()).toEqual(clue.value.toString());
    });

    it('renders question', () => {
        expect(clueWrapper.find('h4').at(0).text()).toEqual(clue.question);
    });

    it('renders answer', () => {
        expect(clueWrapper.find('h4').at(1).text()).toEqual(clue.answer);
    });

    it('has class `text-hidden`', () => {
        expect(clueWrapper.find('h4').at(1).hasClass('text-hidden')).toBe(true);
    });

    describe('when the `value` is unknown', () => {
        beforeEach(() => {
            props.clue.value = undefined;
            clueWrapper = shallow(<Clue {...props} />);
        });

        it('displays `value` as unknown', () => {
            expect(clueWrapper.find('h5').text()).toEqual('unknown');
        });
    });

    describe('when the clue div is clicked', () => {
        beforeEach(() => {
            clueWrapper.find('.clue').simulate('click');
        });
        it('sets `reveal` to true', () => {
            expect(clueWrapper.state().reveal).toBe(true);
        });

        it('sets the text-revealed class', () => {
            expect(clueWrapper.find('h4').at(1).hasClass('text-revealed')).toBe(true);
        })
    });
});