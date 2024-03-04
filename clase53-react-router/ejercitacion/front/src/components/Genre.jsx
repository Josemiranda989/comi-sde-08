import React, { Component } from 'react'

export class Genre extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorcito: "danger"
        }
    }
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className={`card bg-${this.state.colorcito} text-white shadow`}>
                    <div className="card-body">
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}
