import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {}

interface IState {
    value: string;
}


export class NameInput extends React.Component<IProp, IState> {
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
            <FormInput cls='' label='Name' type='text' value={this.state.value} addition={undefined} change={this.setValue}/>
        );
    }
}