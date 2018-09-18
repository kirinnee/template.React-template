import * as React from 'react';
import { NRICInput } from '../FormComponents/NRIC';
import { EmployeeNumberInput } from '../FormComponents/EmployeeNumber';
import { ContactInput } from '../FormComponents/Contact';
import { PasswordInput } from '../FormComponents/Password';
import { NameInput } from '../FormComponents/Name';
interface IProp {
    formid: string;
}
interface IState {
    name: string;
    nric: string | null;
    employeeNumber: string;
    contact: string;
    password: string | null;
    reset: Function[];
}


export class CoordinateRegister extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = {
            name: '',
            nric: null,
            employeeNumber: '',
            contact: '',
            password: null,
            reset: []
        }
    }

    registerReset = (event: Function) => {
        let arr = this.state.reset;
        arr.push(event);
        this.setState({ reset: arr });
    }

    resetFields = () => {
        this.setState({
            name: '',
            nric: null,
            employeeNumber: '',
            contact: '',
            password: null,
            reset: []
        });
    }

    updateName = (name: string) =>{
        this.setState({ name });
    }

    updateNRIC = (nric: string) => {
        this.setState({ nric });
    }

    updateEmployeeNumber = (employeeNumber: string) => {
        this.setState({ employeeNumber });
    }

    updateContact = (contact: string) => {
        this.setState({ contact });
    }

    updatePassword = (password: string | null) => {
        this.setState({ password });
    }

    submitForm = () => {
        if (this.state.name == '' ||
            this.state.nric == null ||
            this.state.employeeNumber == '' ||
            this.state.contact == '' ||
            this.state.password == null)
        {
            alert("Please fill in all fields before submitting the form");

        } else {
            sessionStorage.setItem(("Coordinator" + sessionStorage.length.toString()), JSON.stringify(this.state));
            console.log(this.state);
            alert("Thank you, " + this.state.name + "! We will get back to you after we process your registration!");
            this.resetFields();
            this.state.reset.Every((f: Function) => f());
        }
    }

    render() {
        return (
            <div className='form-container' id={this.props.formid}>
                <form>
                    <NameInput resetName={this.registerReset} getName={this.updateName} />
                    <NRICInput resetNRIC={this.registerReset} getNRIC={this.updateNRIC}/>
                    <EmployeeNumberInput resetEmployeeNumber={this.registerReset} getEmployeeNumber={this.updateEmployeeNumber}/>
                    <ContactInput resetContact={this.registerReset} getContact={this.updateContact}/>
                    <PasswordInput resetPassword={this.registerReset} getPassword={this.updatePassword} />
                    <hr />
                    <input type="button" value="Submit" onClick={this.submitForm} />
                </form>
            </div>

        );
    }
}