import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
import { ValidityIcon, Validity } from './Validation';
interface IProp {
    getPassword:(password: string | null) => void;
}

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

    //RealMethods
    passwordChange(password: string): Validity {
        this.setPassword(password);
        let valid = this.isPasswordValid(password);
        this.setState({ passwordValid: valid });
        return valid;
    }
    repeatChange(password: string, repeat: string): Validity {
        this.setRepeat(repeat);
        let v = this.isRepeatValid(password, repeat);
        if (v === Validity.valid && this.isPasswordValid(password) !== Validity.valid) {
            v = Validity.invalid;
        }
        this.setState({ repeatValid: v });
        return v;
    }


    //Event Handler
    handePasswordChange = (event: ChangeEvent) => {
        let password = event.target['value'];
        let repeat = this.state.repeatpassword;

        this.passwordChange(password);
        let result = this.repeatChange(password, repeat);
        this.props.getPassword(result === Validity.valid ? repeat: null)
    }
    handeRepeatChange = (event: ChangeEvent) => {
        let repeat = event.target['value'];
        let password = this.state.password;

        let result = this.repeatChange(password, repeat);
        this.props.getPassword(result === Validity.valid ? repeat : null)
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
                    change={this.handePasswordChange}
                />
                <FormInput cls='' label='Retype Password' type='password'
                    value={this.state.repeatpassword}
                    addition={
                        <ValidityIcon
                            valid={this.state.repeatValid}
                            message={this.state.invalidRepeatMessage}
                        />
                    }
                    change={this.handeRepeatChange}
                />
            </>
        );
    }
}