import * as React from 'react';
import { should } from 'chai';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Address } from '../../src/Address';
import { PasswordInputTest } from './passwordinput.test';


should();

Enzyme.configure({ adapter: new Adapter() });

describe('<Address/>', () => {

    it('should have the right default values for each of its fields', () => {
        const wrapper = shallow(<Address resetAddress={(event: Function) => {}} updateAddress={(e) => {console.log(e) }} />);
        wrapper.state("lineOne").should.be.equal('');
        wrapper.state("lineTwo").should.be.equal('');
        wrapper.state("postalCode").should.be.equal('');
        wrapper.state("city").should.be.equal('');
        wrapper.state("country").should.be.equal('');
    });
    
});

PasswordInputTest();