import React, { Component } from 'react'

export default class AnimeApiFetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anime: null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        // console.log("Se cargó");
        fetch('https://api.jikan.moe/v4/anime')
            .then(res => res.json())
            .then(data => this.setState({ anime: data.data[1], loading: false }))
            .catch(e => this.setState({ error: e, loading: false }))
    }

    componentDidUpdate() {
        // console.log("Se actualizó");
    }

    render() {
        const { loading, error, anime } = this.state


        if (loading) {
            return <p>Cargando...</p>
        }

        if (error) {
            return <p>Error: {error.message}</p>
        }

        return (
            <div>
                <h1>{anime?.title}</h1>
                <img src={anime.images.jpg.large_image_url} />
            </div>
        )


    }
}
