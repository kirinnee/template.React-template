import * as React from 'react';


interface IProp {

}

interface IState {

    name: string;
    address: IAddress;
    aCRANumber: string;
    employeeCount: number;
    paymentPreference: string;
}

interface IAddress {
    lineOne: string;
    lineTwo: string;
    postalCode: string;
    city: string;
    country: string;
}

export class ServiceVendorBusinessForm extends React.Component<IProp,IState> {

    constructor(prop:IProp) {
        super(prop);
        this.state =
        {
            name: '',
            address:
            {
                lineOne: '',
                lineTwo: '',
                postalCode: '',
                city: '',
                country:''
            },
            aCRANumber: '',
            employeeCount: 0,
            paymentPreference:''
        };
    }

    render() {
        return (
            <form>
                <Name />
                <Address />
                <ACRANumber />
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                
            </form>
        );
    }
}