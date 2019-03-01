import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js'
import MovieList from './MovieList.js';
import { Redirect } from 'react-router-dom';

class Search extends Component {
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
    
    render() {

        const { auth } = this.props
        if (!auth.uid) return <Redirect to ='/signin' />
        return (
            <div>
                <div className="search-bar">
                    <i className="material-icons search-icon">search</i>
                    <input type="text" placeholder="Search for a movie" id='search' onChange={this.handleChange}
                    />
                </div>
                    <MovieList movies={this.props.data}/>
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

export default connect (mapStateToProps, actionCreators)(Search);
// https://api.themoviedb.org/3/movie/550?api_key=e99043e1b44f1a6d68049b97f2e11003