import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';
import { ServiceVendorBusinessForm } from './Form/BusinessRegistrationForm';
import { Kore } from '@kirinnee/core/src';


let c: Core = new Kore();
c.ExtendPrimitives();


ReactDOM.render(
    <ServiceVendorBusinessForm formid="ServiceVendorBusinessForm" />,
    document.getElementById('app') as HTMLElement
);