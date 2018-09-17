import * as React from 'react';
import { IAddress, Address } from '../Address';
import { PaymentPreference } from '../PaymentPreference';
import { NameInput } from '../FormComponents/Name';

interface IProp {
    formid: string;
}

interface IState {
    name: string;
    address: IAddress;
    uen: string;
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
            uen: '',
            employeeCount: '--Please Select--',
            paymentPreference:''
            };
        this.updateEmployeeCount = this.updateEmployeeCount.bind(this);
        this.updateUEN = this.updateUEN.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePaymentPreference = this.updatePaymentPreference.bind(this);

    }

    updateEmployeeCount(event) {
        this.setState({ employeeCount: event.target.value });
        console.log(event.target.value);
    }

    updateUEN(event) {
        this.setState({ uen: event.target.value });
        console.log(event.target.value);
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
        sessionStorage.setItem("Business", JSON.stringify(this.state));
    }
    tt
    render() {
        return (
            <div className='form-container' id={this.props.formid}>
                <form>
                    <NameInput getName={this.updateName} />
                    <Address updateAddress={this.updateAddress} />
                    <FormInput cls='' addition={undefined} type='text' label='UEN' value={this.state.uen} change={this.updateUEN} />                        
                    <div className="form-group">
                        <label>Company Size</label>
                        <div className="form-input-holder">
                            <select required name="employeeCount" value={this.state.employeeCount} onChange={this.updateEmployeeCount}>
                                <option value="" hidden>&nbsp;--Please Select--</option>
                                <option value="Micro: Less than 10">&nbsp;Micro: Less than 10</option>
                                <option value="Small: 10 - 49">&nbsp;Small: 10 - 49</option>
                                <option value="Medium: 50 - 249">&nbsp;Medium: 50 - 249</option>
                                <option value="Large: More than 249">&nbsp;Large: More than 249</option>
                            </select>
                        </div>
                    </div>
                    <PaymentPreference updatePaymentPreference={this.updatePaymentPreference}/>
                    <hr />
                    <input type="submit" value="Submit" onClick={this.submitForm}/>
                </form>
            </div>
        );
    }
}