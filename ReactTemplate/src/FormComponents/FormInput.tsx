import * as React from 'react';
import { ChangeEvent } from 'react';
interface FormInputProp {
    cls: string;
    label: string;
    value: string;
    change: (event: ChangeEvent) => void;
    addition: any | undefined;
    type: string;
}

class FormInput extends React.Component<FormInputProp> {
    constructor(props: FormInputProp) {
        super(props);
    }

    render() {
        let addComponent: boolean = typeof this.props.addition !== "undefined";

        return (
            <div className="form-group">
                <label> {this.props.label} </label>
                <div className="form-input-holder">
                    <input className="input-size" type={this.props.type} value={this.props.value} onChange={this.props.change} />
                    {addComponent && this.props.addition}
                </div>
            </div>
        );
    }
}

export { FormInput };