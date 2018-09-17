import * as React from 'react';
import { NRICInput } from '../FormComponents/NRIC';
import { EmployeeNumberInput } from '../FormComponents/EmployeeNumber';
import { ContactInput } from '../FormComponents/Contact';
import { PasswordInput } from '../FormComponents/Password';
interface IProp {
    formid: string;
}
interface IState { }


export class CoordinateRegister extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
    }

    render() {
        return (
            <div className='form-container' id={this.props.formid}>
                <form>
                    <NRICInput />
                    <EmployeeNumberInput />
                    <ContactInput />
                    <PasswordInput />
                </form>
            </div>

        );
    }
}