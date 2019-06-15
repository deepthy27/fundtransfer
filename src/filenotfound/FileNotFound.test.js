import React,{Component} from 'react';
import {shallow,configure} from 'enzyme';
import  FileNotFound from './FileNotFound';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('when login component is given',()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<FileNotFound/>);

    });
    it('should render', () =>{
        expect(wrapper).toHaveLength(1);
    });
    it('should render', () =>{
        expect(wrapper.find('.title')).to.have.text('FileNotFound please check the path and try again')
    });
})


//   it('should have paragraph displyed', () => {
//     expect(wrapper.find('.content').text()).toEqual('FileNotFound please check the path and try again');
//   });
