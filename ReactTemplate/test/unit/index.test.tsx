import * as React from 'react';

import { should } from 'chai';
import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Repeat } from '../../src/Repeat';

should();

Enzyme.configure({ adapter: new Adapter() });

describe('<Repeat/>', () => {


    it('should repeat the text a set repeat-number of times', () => {
        const wrapper = shallow(<Repeat string='hi' repeat={5} />);
        wrapper.text().should.be.equal('hi hi hi hi hi ');
    });
    
});