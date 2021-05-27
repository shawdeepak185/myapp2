import React, { Component } from 'react';
import { getMovies } from './../services/fakeMovieService';

class Movies extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }

    }

    componentDidMount() {
        const movies = getMovies();
        this.setState({ movies });
    }

    handelDelete = movie => {
        const movies = this.state.movies.filter( m => m._id !== movie._id)
        this.setState({movies})
    }


    render() {

        const {length:count} = this.state.movies;

        if(count === 0)
            return <p>No movies to show</p>
        return (
            <div>
                <h1>Movies</h1>
                <p>Displaying {count} movies</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        { this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.handelDelete(movie)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>

                </table>

            </div>
        );
    }
}

export default Movies;