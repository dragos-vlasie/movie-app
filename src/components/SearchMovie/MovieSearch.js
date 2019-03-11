import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js'
import MovieCard from './MovieCard';
import { Redirect } from 'react-router-dom';

class MovieSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
                data: [],
                search: ''
            }
        }

    componentDidMount() {
        this.props.loadMovie()
    }

    handleChange = (e) => {
        let searchTerm = e.target.value;
        if (searchTerm.length > 0) {
            this.props.searchMovie(searchTerm)
        } else {
            this.props.loadMovie();
        }
    }

    renderMovieList() {
        return (
            <div className="search-results">
                {this.props.data.moviesReducer.movies && this.props.data.moviesReducer.movies.map(movie => {
                    return (
                        <MovieCard movie = {movie} id= {movie.id} key={movie.id} />
                    ) 
                })} 
                </div> 
            )
    }
    
    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to ='/signin' />
        return (
            <div>
                <div className="search-bar">
                    <i className="material-icons search-icon">search</i>
                    <input type="text" placeholder="Search for a movie" id='search' onChange={this.handleChange}/>
                </div>
                {this.renderMovieList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        data: state
    }
}

export default connect (mapStateToProps, actionCreators)(MovieSearch);