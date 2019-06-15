import React,{Component} from 'react';
import {shallow,configure} from 'enzyme';
import  Login from './Login';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('when login component is given',()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Login/>);

    });
    it('should render', () =>{
        expect(wrapper).toHaveLength(1);
    });
    it('should render customer id',()=>{
        expect(wrapper.find('.customerid')).toHaveLength(0);
    });
    it('should render password', () => {
        expect(wrapper.find('.password')).toHaveLength(0);
    });
})

