import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {
    getName: (s: string) => void;
}

interface IState {
    value: string;
}


export class NameInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = { value: '' };
    }

    setValue = (event: ChangeEvent) => {
        let value: string = event.target['value'];
        this.setState({
            value: value
        });
        this.props.getName(value);


    }

    render() {
        return (
            <FormInput cls='' label='Name' type='text' value={this.state.value} addition={undefined} change={this.setValue}/>
        );
    }
}