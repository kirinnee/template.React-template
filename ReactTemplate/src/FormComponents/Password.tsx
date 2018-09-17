import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
import { ValidityIcon, Validity } from './Validation';
interface IProp { }

interface IState {
    password: string;
    repeatpassword: string;

    passwordValid: Validity;
    repeatValid: Validity;

    invalidPaswordMessage: string;
    invalidRepeatMessage: string;

}

export class PasswordInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = {
            password: '',
            repeatpassword: '',
            passwordValid: Validity.none,
            repeatValid: Validity.none,
            invalidPaswordMessage: '',
            invalidRepeatMessage: ''
        };
    }

    //State Setting
    setInvalidPasswordMessage(valid: string) {
        this.setState({ invalidPaswordMessage: valid });
    }
    setInvalidRepeatMessage(valid: string) {
        this.setState({ invalidRepeatMessage: valid });
    }

    //Update Input
    setPassword(password: string) {
        this.setState({password});
    }
    setRepeat(repeatpassword: string) {
        this.setState({ repeatpassword });
    }

    //Validations, and message setting
    isPasswordValid = (pw:string): Validity => {
        if (pw.length < 8) {
            this.setInvalidPasswordMessage('Password needs to be 8 characters long');
            return Validity.invalid;
        }
        if (!/\d/.test(pw)) {
            this.setInvalidPasswordMessage('Password needs to be alphanumeric');
            return Validity.invalid;
        }
        if (pw.toLowerCase() === pw) {
            this.setInvalidPasswordMessage('Password need at least 1 character in uppercase');
            return Validity.invalid;
        }
        this.setInvalidPasswordMessage('');
        return Validity.valid;
    }
    isRepeatValid = (current: string, repeat: string): Validity => {
        let valid = current === repeat;
        let message = valid ? '' : 'Passwords do not match';
        this.setInvalidRepeatMessage(message);
        return valid ? Validity.valid : Validity.invalid;
    }

    //Event Handler
    checkPassword = (event: ChangeEvent) => {
        let value = event.target['value'];
        this.setPassword(value);
        let valid = this.isPasswordValid(value);
        this.setState({ passwordValid: valid });

        let repeat = this.state.repeatpassword;
        if (repeat !== '') {
            this.setRepeat(repeat);
            let v = this.isRepeatValid(value, repeat);
            this.setState({ repeatValid: v });
        }
    }
    
    checkRepeat = (event: ChangeEvent) => {
        let value = event.target['value'];
        this.setRepeat(value);
        let current = this.state.password;
        let valid = this.isRepeatValid(current, value);
        this.setState({ repeatValid: valid });
    }

    render() {
        return (
            <>
                <FormInput cls='' label='Password' type='password'
                    value={this.state.password}
                    addition={
                        <ValidityIcon
                            valid={this.state.passwordValid}
                            message={this.state.invalidPaswordMessage}
                        />
                    }
                    change={this.checkPassword}
                />
                <FormInput cls='' label='Retype Password' type='password'
                    value={this.state.repeatpassword}
                    addition={
                        <ValidityIcon
                            valid={this.state.repeatValid}
                            message={this.state.invalidRepeatMessage}
                        />
                    }
                    change={this.checkRepeat}
                />
            </>
        );
    }
}