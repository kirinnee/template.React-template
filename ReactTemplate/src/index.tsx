import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.scss';
import { ServiceVendorBusinessForm } from './ServiceVendorBusinessForm';

ReactDOM.render(
    <div>
        <ServiceVendorBusinessForm/>
    </div>,
    document.getElementById('app') as HTMLElement
);


