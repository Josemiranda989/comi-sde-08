import React, { Component } from 'react'

export class SimpleStateFull extends Component {

    constructor(props) {
        super(props)
        this.state = {
            saludo: "Bienvenido a este componente",
            email: "dorado@gmail.com"
        }
    }

    render() {
        // const {saludo, email} = this.state

        return (
            <>
                <h2>{this.state.saludo}</h2>
                {/* <h2>{saludo}</h2> */}
                <p>Tu email es: {this.state.email}</p>
                {/* <p>Tu email es: {email}</p> */}
            </>
        )
    }
}
