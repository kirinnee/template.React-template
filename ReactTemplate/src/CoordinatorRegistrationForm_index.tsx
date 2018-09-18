import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';
import { CoordinateRegister } from './Form/CoordinatorRegistrationForm';
import { Kore } from '@kirinnee/core/src';


let c: Core = new Kore();
c.ExtendPrimitives();


ReactDOM.render(
    <CoordinateRegister formid="CoordinateRegister" />,
    document.getElementById('app') as HTMLElement
);
