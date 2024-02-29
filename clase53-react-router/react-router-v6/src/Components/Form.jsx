import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: ""
        }
    }

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            nombre: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert("El nombre que se envia es " + this.state.nombre)
        e.preventDefault()
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Nombre:
                        <input
                            type="text"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <small>{this.state.nombre}</small>
            </>
        )
    }
}
