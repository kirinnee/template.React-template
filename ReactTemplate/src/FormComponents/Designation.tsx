import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {
    getDesignation: (s: string) => void;
    resetDesignation: (event: Function) => void;
}

interface IState {
    value: string;
}


export class DesignationInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        props.resetDesignation(this.resetState);
        this.state = { value: '' };
    }

    resetState = () => {
        this.setState({ value: '' });
    }

    setValue = (event: ChangeEvent) => {
        this.setState({
            value: (event.target['value'] as string)
        });
        this.props.getDesignation(event.target['value']);
    }

    render() {
        return (
            <FormInput cls='' label='Designation' type='text' value={this.state.value} addition={undefined} change={this.setValue} />
        );
    }
}