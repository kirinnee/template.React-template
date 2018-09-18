import * as React from 'react';
import { ChangeEvent } from 'react';
import { FormInput } from './FormInput';
import { ValidityIcon, Validity } from './Validation';

interface IProp {
    getNRIC: (s: string) => void;
    resetNRIC: (event: Function) => void;
}

interface IState {
    nric: string;
    valid: Validity;
}


export class NRICInput extends React.Component<IProp, IState>{

    constructor(props: IProp) {
        super(props);
        props.resetNRIC(this.resetState);
        this.state = { nric: '', valid: Validity.none };
    }

    resetState = () => {
        this.setState({ nric: '', valid: Validity.none });
    }

    IsNRICValid(nric: string) {

        if (
            nric.length !== 9 ||
            !['S', 'T', 'G', 'F'].includes(nric[0].toUpperCase())
        ) {
            return false;
        }
        var lastLetter: string = nric[8].toUpperCase();
        var nricCheckDigits: string = 'JZIHGFEDCBA';
        var finCheckDigits: string = 'XWUTRQPNMLK';
        var digits: string = nric.slice(1, 8);
        var weights = [2, 7, 6, 5, 4, 3, 2];
        var sum = 0;

        if (isNaN(parseInt(digits))) {
            return false;
        }
        if (['T', 'G'].includes(nric[0].toUpperCase())) {
            sum += 4;
        }
        for (var i = 0; i < digits.length; i++) {
            sum += parseInt(digits.charAt(i), 10) * weights[i];
        }
        if (['S', 'T'].includes(nric[0].toUpperCase())) {
            return nricCheckDigits.charAt(sum % 11) === lastLetter;
        }
        return finCheckDigits.charAt(sum % 11) === lastLetter;

    }

    CheckNRICValidity = (event: ChangeEvent) => {
        let val: string | null = event.target!['value'];
        let nric: string = val === null ? '' : val;
        this.setState({ nric: nric });
        this.props.getNRIC(nric);
        if (this.IsNRICValid(nric)) {
            this.setState({ valid: Validity.valid });
        } else {
            this.setState({ valid: Validity.invalid });
        }
        
    }


    render() {
        return (
            <FormInput cls='' label='NRIC' type='text' value={this.state.nric} addition={<ValidityIcon valid={this.state.valid} message='NRIC is in an invalid format' />} change={this.CheckNRICValidity} />
        );

    }

}