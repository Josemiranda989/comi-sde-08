import React, { Component } from 'react';
import { ChartRow } from './ChartRow';

export class Chart extends Component {
    constructor() {
        super()
        this.state = {
            tableRowsData: [
                {
                    Title: 'Billy Elliot ',
                    Length: '123',
                    Rating: '5',
                    Categories: ['Drama', 'Comedia'],
                    Awards: 2
                },
                {
                    Title: 'Alicia en el país de las maravillas',
                    Length: '142',
                    Rating: '4.8',
                    Categories: ['Drama', 'Acción', 'Comedia'],
                    Awards: 3
                }]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/movies')
            .then(res => res.json())
            .then(movies => {
                this.setState({ tableRowsData: movies.data })
            })
            .catch(error => console.log(error.message))
    }

    render() {
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Duración</th>
                                    <th>Rating</th>
                                    <th>Género</th>
                                    <th>Premios</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Título</th>
                                    <th>Duración</th>
                                    <th>Rating</th>
                                    <th>Género</th>
                                    <th>Premios</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    this.state.tableRowsData.map((row, i) => {
                                        return <ChartRow {...row} key={i} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}