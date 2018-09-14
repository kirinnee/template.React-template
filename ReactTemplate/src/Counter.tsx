import * as React from 'react';

export interface Prop {

}

interface State {
    name: string;
    counter: number;
}

export class Counter extends React.Component<Prop, State> {

    constructor(prop: Prop) {
        super(prop);
        this.state = { name: 'hi', counter: 0 };
    }

    Increase = () =>{
        let counter = this.state.counter + 1;
        this.setState({ counter });
    }

    Decrease = () => {
        console.log(this);
        let counter = this.state.counter - 1;
        this.setState({ counter });
    }

    ChangeName = (event: React.ChangeEvent) => {
        this.SetName((event.target['value'] as string));
    }

    SetName = (name: string) => {
        this.setState({ name });
    }
    render() {

        return (
            <div id='test-target'>
                <div className="output">
                    {(this.state.name + ' ').repeat(this.state.counter)}
                </div>
                <button className='increase' onClick={this.Increase}>Increase</button>
                <button onClick={this.Decrease}>Decrease</button>
                <input onChange={this.ChangeName} type='text' />
            </div>
        );
    }


}

