﻿import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {
    getContact: (s: string) => void;
    resetContact: (event: Function) => void;
}

interface IState {
    value: string;
}


export class ContactInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        props.resetContact(this.resetState);
        this.state = { value: '' };
    }

    resetState = () => {
        this.setState({ value: '' });
    }

    setValue = (event: ChangeEvent) => {
        this.setState({
            value: (event.target['value'] as string)
        });
        this.props.getContact(event.target['value']);
    }

    render() {
        return (
            <FormInput cls='' label='Contact No.' type='tel' value={this.state.value} addition={undefined} change={this.setValue}/>
        );
    }
}