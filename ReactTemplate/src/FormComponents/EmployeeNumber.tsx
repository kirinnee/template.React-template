import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {}

interface IState {
    value: string;
}


export class EmployeeNumberInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = { value: '' };
    }

    setValue = (event: ChangeEvent) => {
        this.setState({
            value: (event.target['value'] as string)
        });
    }

    render() {
        return (
            <FormInput cls='' label='Employee No.' type='text' value={this.state.value} addition={undefined} change={this.setValue}/>
        );
    }
}