import * as React from 'react';
import { ContactInput } from '../FormComponents/Contact';
import { NameInput } from '../FormComponents/Name';
import { DesignationInput } from '../FormComponents/Designation';
import { DepartmentInput } from '../FormComponents/Department';
import { EmailInput } from '../FormComponents/Email';
import { PasswordInput } from '../FormComponents/Password';
interface IProp {
    formid: string;
}
interface IState {
    name: string;
    designation: string;
    department: string;
    contact: string;
    email: string | null;
    password: string | null;
    reset: Function[];
}

export class AdminRegistrationForm extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = {
            name: '',
            designation: '',
            department: '',
            contact: '',
            email: null,
            password: null,
            reset: []
        }
    }

    updateName = (name: string) => {
        this.setState({ name });
    }

    updateContact = (contact: string) => {
        this.setState({ contact });
    }

    updateDesignation = (designation: string) => {
        this.setState({ designation });
    }

    updateDepartment = (department: string) => {
        this.setState({ department });
    }

    updateEmail = (email: string | null) => {
        this.setState({ email });
    }

    updatePassword = (password: string | null) => {
        this.setState({ password });
    }

    registerReset = (event: Function) => {
        let arr = this.state.reset;
        arr.push(event);
        this.setState({ reset: arr });
    }

    resetFields = () => {
        this.setState({
            name: '',
            designation: '',
            department: '',
            contact: '',
            email: null,
            password: null
        });
    }

    submitForm = () => {
        if (this.state.name == '' ||
            this.state.designation == null ||
            this.state.department == '' ||
            this.state.contact == '' ||
            this.state.email == null || 
            this.state.password == null)
        {
            alert("Please fill in all fields before submitting the form");
            console.log(this.state);
        } else {
            sessionStorage.setItem(("Admin" + sessionStorage.length.toString()), JSON.stringify(this.state));
            alert("Thank you, " + this.state.name + "! We will get back to you after we process your registration!");
            console.log(this.state);
            this.resetFields();
            this.state.reset.Every((f: Function) => f());
            console.log(this.state);
        }
    }

    render() {
        return (
            <div className='form-container' id={this.props.formid}>
                <form>
                    <NameInput resetName={this.registerReset} getName={this.updateName} />
                    <DesignationInput resetDesignation={this.registerReset} getDesignation={this.updateDesignation} />
                    <DepartmentInput resetDepartment={this.registerReset} getDepartment={this.updateDepartment} />
                    <ContactInput resetContact={this.registerReset} getContact={this.updateContact} />
                    <EmailInput resetEmail={this.registerReset} getEmail={this.updateEmail}/>
                    <PasswordInput resetPassword={this.registerReset} getPassword={this.updatePassword}/>
                    <hr />
                    <input type="button" value="Submit" onClick={this.submitForm} />
                </form>
            </div>

        );
    }
}