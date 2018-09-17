import * as React from 'react';
import { NRICInput } from '../FormComponents/NRIC';
import { EmployeeNumberInput } from '../FormComponents/EmployeeNumber';
import { ContactInput } from '../FormComponents/Contact';
import { PasswordInput } from '../FormComponents/Password';
interface IProp {
    formid: string;
}
interface IState {
    name: string;
    nric: string | null;
    employeeNumber: string;
    contact: string;
    password: string | null;
}


export class CoordinateRegister extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = {
            name: '',
            nric: null,
            employeeNumber: '',
            contact: '',
            password: null
        }
    }

    updateName = (name: string) =>{
        this.setState({ name });
    }

    updatePassword = (password: string | null) => {
        this.setState({ password });
    }

    render() {
        return (
            <div className='form-container' id={this.props.formid}>
                <form>
                    <NameInput getName={this.updateName} />
                    <NRICInput />
                    <EmployeeNumberInput />
                    <ContactInput />
                    <PasswordInput getPassword={this.updatePassword} />
                </form>
            </div>

        );
    }
}