import * as React from 'react';
import { should } from 'chai';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Address } from '../../src/Address';


should();

Enzyme.configure({ adapter: new Adapter() });

describe('<Address/>', () => {

    it('should have the right default values for each of its fields', () => {
        const wrapper = shallow(<Address />);
        wrapper.state("lineOne").should.be.equal('Line One');
        wrapper.state("lineTwo").should.be.equal('Line Two');
        wrapper.state("postalCode").should.be.equal('Postal Code');
        wrapper.state("city").should.be.equal('City');
        wrapper.state("country").should.be.equal('Country');
    });   
});