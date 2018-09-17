import * as React from 'react';



interface IProp {
    updateAddress;
}

interface IState extends IAddress {
    
}

 interface IAddress {
    lineOne: string;
    lineTwo: string;
    postalCode: string;
    city: string;
    country: string;
}
class Address extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state =
            {
                lineOne: 'Line One',
                lineTwo: 'Line Two',
                postalCode: 'Postal Code',
                city: 'City',
                country: 'Country'
            };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let name: "lineOne" | "lineTwo" | "postalCode" | "city" | "country" = target.name;
        var value:string = '';
        if (name == "lineOne") { value = target.value };
        if (name == "lineTwo") { value = target.value };
        if (name == "postalCode") { value = target.value };
        if (name == "city") { value = target.value };
        if (name == "country") { value = target.value };

        let newState = {};
        newState[name] = value;
        this.setState(newState);
        this.props["updateAddress"](this.state);
    }

    render() {
        return (
            <div id="address-form-group" className="form-group">
                <label>Address</label>
                <div className="form-input-holder">
                    <input className={"input-size"} name="lineOne" type="text" placeholder={this.state.lineOne} onChange={this.handleChange} /><br /><br />
                    <input className={"input-size"} name="lineTwo" type="text" placeholder={this.state.lineTwo} onChange={this.handleChange} /><br /><br />
                    <input className={"input-size"} name="postalCode" type="text" placeholder={this.state.postalCode} onChange={this.handleChange} /><br /><br />
                    <input className={"input-size"} name="city" type="text" placeholder={this.state.city} onChange={this.handleChange} /><br /><br />
                    <input className={"input-size"} name="country" type="text" placeholder={this.state.country} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export {IAddress, Address};