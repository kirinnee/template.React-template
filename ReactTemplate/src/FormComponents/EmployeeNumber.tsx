import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {
    getEmployeeNumber: (s: string) => void;
    resetEmployeeNumber: (event: Function) => void;
}

interface IState {
    value: string;
}


export class EmployeeNumberInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        props.resetEmployeeNumber(this.resetValue);
        this.state = { value: '' };
    }

    resetValue = () => {
        this.setState({ value: '' });
    }

    setValue = (event: ChangeEvent) => {
        this.setState({
            value: (event.target['value'] as string)
        });
        this.props.getEmployeeNumber(event.target['value']);
    }

    render() {
        return (
            <FormInput cls='' label='Employee No.' type='text' value={this.state.value} addition={undefined} change={this.setValue}/>
        );
    }
}