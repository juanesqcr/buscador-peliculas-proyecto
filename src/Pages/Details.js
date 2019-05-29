import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';


const API_KEY = 'f95a90e7';


class Details extends Component {
    static propTypes = {
        match: PropTypes.shape(),
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
    }

    state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })
            })
    }

    _goBack() {
        window.history.back();
    }
    componentDidMount() {
        console.log(this.props)
        const { movieID } = this.props.match.params
        this._fetchMovie({ id: movieID })
    }
    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div className='App'>
                <button onClick={this._goBack}>Volver a la pagina</button>
                <h1 className='textoNegrita'>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3 className='textoNegrita'>{Actors}</h3>
                <span className='textoNegrita'>{Metascore}</span>
                <p className='textoNegrita'>{Plot}</p>
            </div>

        )
    }
}

export default Details;