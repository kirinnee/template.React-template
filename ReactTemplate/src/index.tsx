import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';
import { ServiceVendorBusinessForm } from './ServiceVendorBusinessForm';
import { Kore } from '@kirinnee/core/src';

let c: Core = new Kore();
c.ExtendPrimitives();
import { CoordinateRegister } from './Form/CoordinateRegistrationForm';


ReactDOM.render(
    <CoordinateRegister formid='coord-form'/>,
    document.getElementById('app') as HTMLElement
);


