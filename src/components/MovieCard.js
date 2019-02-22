import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js'

class MovieCard extends Component {
    constructor(props) {
        super(props)
		this.state = {
            data: [],
            search: ''
        }
    }

    handleChange = (event) => {
        let cucu = event.target.parentElement.parentElement.parentElement.parentElement.id
        this.props.addMovie(cucu)
    }

    render() {
        const {id, movie, url, posterPath} = this.props;
        return (
            <div className="search-result__card" id={id}>
                <div className="card__image">
                    <img alt="poster" width="185" height="278" src={posterPath}/>
                    <div className="tooltip">
                        <span className="add_circle" onClick={this.handleChange}>
                            <i className="material-icons">add_circle</i>
                            <div className="tooltip_popup-add">Add movie</div>
                        </span>
                        <span className="remove_circle">
                            <i className="material-icons">remove_circle</i>
                            <div className="tooltip_popup-remove">Remove</div>
                        </span>
                    </div>
                </div>
                <div className="card__info">
                    <div className="text-center">
                        <span className="card-title">{movie.title}</span>
                    </div>
                    <p className="overview">{movie.overview}</p>
                    <p className="view_more"><a className="result" href={url}>More Info</a></p>
                </div>
            </div>
        )
    }
}

export default connect(null, actionCreators)(MovieCard)