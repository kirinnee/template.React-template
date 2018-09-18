import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
import { ValidityIcon, Validity } from './Validation';
import { ValidateEmail } from '../Modules/EmailValidation';

interface IProp {
    getEmail: (s: string | null) => void;
    resetEmail: (event: Function) => void;
}

interface IState {
    value: string;
    emailValid: Validity;
    invalidEmail: string;
}


export class EmailInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        props.resetEmail(this.resetState);
        this.state = 
        {
            value: '',
            emailValid: Validity.none,
            invalidEmail:''
            };

    }

    resetState = () => {
        this.setState({
            value: '',
            emailValid: Validity.none,
            invalidEmail: ''
        });
    }

    IsEmailValid = (event: ChangeEvent) => {
        let value: string = event.target['value']
        if (ValidateEmail(value)) {
            this.setState({
                value: value,
                emailValid: Validity.valid,
                invalidEmail: ''
            });
            this.props.getEmail(value);
        } else {
            this.setState({
                value: value,
                emailValid: Validity.invalid,
                invalidEmail: 'Email does not match email address format'
            });
            this.props.getEmail(null);
        }
    }

    render() {
        return (
            <FormInput cls='' label='Email' type='text' value={this.state.value} addition={
                <ValidityIcon
                    valid={this.state.emailValid}
                    message={this.state.invalidEmail}
                />
            } change={this.IsEmailValid} />
        );
    }
}