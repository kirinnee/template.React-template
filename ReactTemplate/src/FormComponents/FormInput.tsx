import * as React from 'react';
import { ChangeEvent } from 'react';
interface FormInputProp {
    /**Class of the input */
    cls: string;
    /**Label of the input */
    label: string;
    /**value of the input */
    value: string;
    /**Event to fire when input value changes */
    change: (event: ChangeEvent) => void;
    /**Additional object to input */
    addition: any | undefined;
    /** type of input */
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
                    <input className={"input-size " + this.props.cls} type={this.props.type} value={this.props.value} onChange={this.props.change} />
                    {addComponent && this.props.addition}
                </div>
            </div>
        );
    }
}

export { FormInput };