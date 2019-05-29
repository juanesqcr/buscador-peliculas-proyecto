import React, { Component } from 'react'

const API_KEY = 'f95a90e7'

export default class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(result => {
                const { Search= [], totalResults=0 } = result
                console.log({ Search , totalResults })
                this.props.onResults(Search)
            }
            )
    }

    render() {
        return (

            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Buscar Pelicula"
                        />
                    </div>
                    <div className="control">
                        <button href="null" className="button is-info">
                            Buscar
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}
