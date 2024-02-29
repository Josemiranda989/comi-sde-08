import React, { Component } from 'react'

export class Counter extends Component { //extiende de component
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        console.log("hiciste");
        this.setState({ count: this.state.count + 1 })
    };

    render() { //el return va envuelto en render
        return (
            <div>
                <p>Contador: {this.state.count}</p>
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        )
    }
}
