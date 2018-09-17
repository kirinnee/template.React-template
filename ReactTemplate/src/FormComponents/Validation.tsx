import * as React from 'react';
import tick from '../images/tick.svg';
import cross from '../images/cross.svg';

enum Validity {
    valid,
    invalid,
    none
}

interface IProp {
    valid: Validity;
    message: string;
}
class ValidityIcon extends React.Component<IProp>{
    constructor(props: IProp) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="form-icon-holder">
                    {(() => {
                        switch (this.props.valid) {
                            case Validity.none:
                                return null;
                            case Validity.valid:
                                return <img src={tick} />;
                            case Validity.invalid:
                                return <img src={cross} />;
                            default:
                                throw new Error('ArgumentException: Unknown validity enum');
                        }
                    })()}
                </div>
                <div className='form-input-invalid-message'>
                    {this.props.valid === Validity.invalid &&
                        this.props.message
                    }
                </div>
            </>
        );
    }
}

export { Validity, ValidityIcon };