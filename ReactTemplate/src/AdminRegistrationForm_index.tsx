import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';
import { AdminRegistrationForm } from './Form/AdminRegistrationForm';
import { Kore } from '@kirinnee/core/src';


let c: Core = new Kore();
c.ExtendPrimitives();


ReactDOM.render(
    <AdminRegistrationForm formid="AdminRegistrationForm" />,
    document.getElementById('app') as HTMLElement
);