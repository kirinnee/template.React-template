import * as React from 'react';

interface IProp {

}

interface IState {

    value:'';
}


export class ServiceVendorName extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
        );
    }
}