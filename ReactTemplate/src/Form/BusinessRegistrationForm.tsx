import * as React from 'react';
import { IAddress, Address } from '../Address';
import { PaymentPreference } from '../PaymentPreference';
import { NameInput } from '../FormComponents/Name';
import { FormInput } from '../FormComponents/FormInput';

interface IProp {
    formid: string;
}

interface IState {
    name: string;
    address: IAddress;
    uen: string;
    employeeCount: string;
    paymentPreference: string[];
    reset: Function[];
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
            paymentPreference: [],
            reset:[]
            };
        this.updateEmployeeCount = this.updateEmployeeCount.bind(this);
        this.updateUEN = this.updateUEN.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePaymentPreference = this.updatePaymentPreference.bind(this);

    }

    registerReset = (event: Function) => {
        let arr = this.state.reset;
        arr.push(event);
        this.setState({ reset: arr });
    }

    resetFields = () => {
        this.setState({
            name: '',
            address:
            {
                lineOne: '',
                lineTwo: '',
                postalCode: '',
                city: '',
                country: '',
                reset: []
            },
            uen: '',
            employeeCount: '--Please Select--',
            paymentPreference: []
        });
    }

    updateEmployeeCount(event) {
        this.setState({ employeeCount: event.target.value });
    }

    updateUEN(event) {
        this.setState({ uen: event.target.value });
    }

    updateName(val) {
        this.setState({ name: val });
    }

    updateAddress(val) {
        this.setState({ address: val });
        console.log("Updated");
    }

    updatePaymentPreference(val) {
        this.setState({ paymentPreference: val });
    }

    submitForm() {
        if (this.state.name == '' ||
            this.state.address.city == '' ||
            this.state.address.lineOne == '' ||
            this.state.address.lineTwo == '' ||
            this.state.address.postalCode == '' ||
            this.state.employeeCount == '--Please Select--' ||
            this.state.paymentPreference.length == 0 ||
            this.state.uen == '')
        {
            alert("Please fill in all fields before submitting the form");
        } else {
            sessionStorage.setItem(("Business" + sessionStorage.length.toString()), JSON.stringify(this.state));
            alert("Thank you, " + this.state.name + "! We will get back to you after we process your registration!");
            console.log(this.state);
            this.resetFields();
            this.state.reset.Every((f: Function) => f());
        }
    }
    
    render() {
        return (
            <div className='form-container' id={this.props.formid}>
                <form>
                    <NameInput resetName={this.registerReset} getName={this.updateName} />
                    <Address resetAddress={this.registerReset} updateAddress={this.updateAddress} />
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
                    <PaymentPreference resetPaymentPreference={this.registerReset} updatePaymentPreference={this.updatePaymentPreference}/>
                    <hr />
                    <input type="button" value="Submit" onClick={this.submitForm}/>
                </form>
            </div>
        );
    }
}