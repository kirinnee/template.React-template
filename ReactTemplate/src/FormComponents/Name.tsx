import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {
    getName: (s: string) => void;
    resetName: (event: Function) => void;
}

interface IState {
    value: string;
}


export class NameInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        props.resetName(this.resetState);
        this.state = { value: '' };
    }

    resetState = () => {
        this.setState({
            value: ""
        });
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