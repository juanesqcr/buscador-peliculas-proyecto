import React, { Component } from 'react'
import { Title } from '../Components/Title'
import SearchForm from '../Components/SearchFrom'
import MoviesList from '../Components/movieList'
import '../App.css';


class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResuls = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults() {
        return (
            this.state.results.length === 0
                ? <p>Sin resultados</p>
                : <MoviesList movies={this.state.results} />
        )
    }

    render() {
        //1. Se pone el nombre 'Title' y en medio el texto que se le pasa porque en la clase componente se recibe como un 'child'
        return (
            <div>
                <Title>{/*1.*/}Buscar Peliculas</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResuls} />
                </div>
                {
                    this.state.usedSearch
                        ? this._renderResults()
                        : <small className='textoNegrita'>Busque una pelicula </small>
                }
            </div>
        )
    }
}

export default Home;