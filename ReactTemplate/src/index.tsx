import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';
import { Repeat } from './Repeat';
import { Counter } from './Counter';
import { Kore } from '@kirinnee/core/src';


let core: Core = new Kore();
core.ExtendPrimitives();

ReactDOM.render(
    <div>
        <Repeat string='hi' repeat={100} /> <Counter />
    </div>,
    document.getElementById('app') as HTMLElement
);


