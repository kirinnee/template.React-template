import * as React from 'react';
import { FormInput } from './FormInput';
import { ChangeEvent } from 'react';
interface IProp {
    getDepartment: (s: string) => void;
    resetDepartment: (event:Function) => void;
}

interface IState {
    department: string;
}


export class DepartmentInput extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        props.resetDepartment(this.resetState);
        this.state = { department: '' };
    }

    resetState = () => {
        this.setState({
            department: ""
        });
    }

    setValue = (event: ChangeEvent) => {
        this.setState({
            department: (event.target['value'] as string)
        });
        this.props.getDepartment(event.target['value']);
    }

    render() {
        return (
            <FormInput cls='' label='Department' type='text' value={this.state.department} addition={undefined} change={this.setValue} />
        );
    }
}