import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';
import { CoordinateRegister } from './Form/CoordinateRegistrationForm';


ReactDOM.render(
    <CoordinateRegister formid='coord-form'/>,
    document.getElementById('app') as HTMLElement
);


