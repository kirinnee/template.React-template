import * as React from 'react';
import { ServiceVendorName } from '../ServiceVendorName';
import { IAddress, Address } from '../Address';
import { PaymentPreference } from '../PaymentPreference';
import { NameInput } from '../FormComponents/Name';
import { FormInput } from '../FormComponents/FormInput';

interface IProp {

}

interface IState {
    name: string;
    address: IAddress;
    aCRANumber: string;
    employeeCount: string;
    paymentPreference: string;
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
            employeeCount: '--Please Select--',
            paymentPreference:''
            };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePaymentPreference = this.updatePaymentPreference.bind(this);

    }

    handleChange(event) {
        let target = event.target;
        let name: "aCRANumber" | "employeeCount" | "paymentPreference" = target.name;
        var value:string = '';
        if (name == "aCRANumber") { value = target.value };
        if (name == "employeeCount") { value = target.value };
        if (name == "paymentPreference") { value = target.value };

        let newState = {};
        newState[name] = value;
        console.log(value);
        this.setState(newState);
        console.log(name);
        console.log(newState);
    }

    updateName(val) {
        this.setState({ name: val });
        console.log(val);
    }

    updateAddress(val) {
        this.setState({ address: val });
        console.log(this.state);
    }

    updatePaymentPreference(val) {
        this.setState({ paymentPreference: val });
        console.log(this.state);
    }

    submitForm() {
        localStorage.setItem("Business", JSON.stringify(this.state));
    }

    render() {
        return (
            <form>
                <NameInput getName={this.updateName} /><br />
                <Address updateAddress={this.updateAddress}/><br />
                <label>
                    UEN: &nbsp;
                    <input name="aCRANumber" type="text" value={this.state.aCRANumber} onChange={this.handleChange} />
                </label><br />
                

                <label>
                    Company Size: &nbsp;
                    <select name="employeeCount" value={this.state.employeeCount} onChange={this.handleChange}>
                        <option value="Micro: Less than 10">&nbsp;Micro: Less than 10</option>
                        <option value="Small: 10 - 49">&nbsp;Small: 10 - 49</option>
                        <option value="Medium: 50 - 249">&nbsp;Medium: 50 - 249</option>
                        <option value="Large: More than 249">&nbsp;Large: More than 249</option>
                    </select>
                </label><br />
                <PaymentPreference updatePaymentPreference={this.updatePaymentPreference}/>
                <hr />
                <input type="submit" value="Submit" onClick={this.submitForm}/>
            </form>
        );
    }
}