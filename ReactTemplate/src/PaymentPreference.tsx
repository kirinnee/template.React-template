import * as React from 'react';

interface IProp {
    updatePaymentPreference;
}

interface IState {
    preferredPaymentOptions: string[];
}

export class PaymentPreference extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state =
            {
            preferredPaymentOptions: []
            };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //let newState = {};
        //let name = "preferredPaymentOptions";
        //for (let i = 0; i < this.state.preferredPaymentOptions.length; i++) {
        //    newState[name].push(this.state.preferredPaymentOptions[i]);
        //}
        if (this.state.preferredPaymentOptions.Contains(event.target.name)) {
            let newState = this.state.preferredPaymentOptions.RemoveValue(event.target.name);
            this.setState({ preferredPaymentOptions: newState });
            
        } else {
            this.state.preferredPaymentOptions.push(event.target.name);
            this.setState({ preferredPaymentOptions: this.state.preferredPaymentOptions });
        }
        this.props["updatePaymentPreference"](this.state.preferredPaymentOptions);

    }

    render() {
        return (
            <label>
                Payment Preference:&nbsp;<br/>
                <input name="Cash" type="checkbox" onClick={this.handleClick} />&nbsp;Cash <br />
                <input name="Cheque" type="checkbox" onClick={this.handleClick} />&nbsp;Cheque <br />
                <input name="PayNow" type="checkbox" onClick={this.handleClick} />&nbsp;PayNow <br />
                <input name="Internet Banking" type="checkbox" onClick={this.handleClick} />&nbsp;Internet Banking
            </label>
        );
    }
}

