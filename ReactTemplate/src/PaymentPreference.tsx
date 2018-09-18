import * as React from 'react';

interface IProp {
    updatePaymentPreference;
    resetPaymentPreference: (event: Function) => void;
}

interface IState {
    preferredPaymentOptions: string[];
}

export class PaymentPreference extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        props.resetPaymentPreference(this.resetState);
        this.state =
            {
            preferredPaymentOptions: []
            };
        this.handleClick = this.handleClick.bind(this);
    }

    resetState = () => {
        this.setState({
            preferredPaymentOptions: []
        });
    }

    IsPaymentPreferenceValid(preferredPaymentOptions: string[]) {
        if (preferredPaymentOptions.length == 0) return false;
        return true;
    }

    handleClick(event) {
        if (this.state.preferredPaymentOptions.Contains(event.target.name)) {
            let newState = this.state.preferredPaymentOptions.RemoveValue(event.target.name);
            this.setState({ preferredPaymentOptions: newState });
            this.props.updatePaymentPreference(newState);
            //this.refs["Cash"]["checked"] = true;            
        } else {
            this.state.preferredPaymentOptions.push(event.target.name);
            this.setState({ preferredPaymentOptions: this.state.preferredPaymentOptions });
            this.props.updatePaymentPreference(this.state.preferredPaymentOptions);

        }

    }

    render() {
        return (
            <div id="payment-preference-form-group" className="form-group">
                <label>Payment Preference <br/> <div className="input-instructions">Select at least one preference</div></label>
                <div className="form-input-holder">
                    <input name="Cash" type="checkbox" onClick={this.handleClick} checked={this.state.preferredPaymentOptions.Contains("Cash")} />Cash <br />
                    <input name="Cheque" type="checkbox" onClick={this.handleClick} checked={this.state.preferredPaymentOptions.Contains("Cheque")}  />Cheque <br />
                    <input name="PayNow" type="checkbox" onClick={this.handleClick} checked={this.state.preferredPaymentOptions.Contains("PayNow")} />PayNow <br />
                    <input name="Internet Banking" type="checkbox" onClick={this.handleClick} checked={this.state.preferredPaymentOptions.Contains("Internet Banking")}  />Internet Banking
                </div>
            </div>
        );
    }
}

