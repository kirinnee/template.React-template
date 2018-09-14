import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';
import { Repeat } from './Repeat';
import { Counter } from './Counter';
import { Pictureka } from './Pictureka';
ReactDOM.render(
    <div>
        <Repeat string='hi' repeat={100} /> <Counter /><Pictureka/>
    </div>,
    document.getElementById('app') as HTMLElement
);


