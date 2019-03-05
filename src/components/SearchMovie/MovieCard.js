import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class MovieCard extends Component {
    constructor(props) {
        super(props)
		this.state = {
            data: [],
            search: ''
        }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        let movieId = event.target.parentElement.parentElement.parentElement.parentElement.id
        const currentUser = this.props.user.auth.uid
        const users = this.props.users;
          users.map( user=>{
            if (user.id === currentUser) {
            this.props.addMovie(user, movieId)
            }
          })
    }

    render() {
        const {id, movie, url, posterPath} = this.props;
        return (
            <div className="search-result__card" id={id}>
                <div className="card__image">
                    <img alt="poster" src={posterPath}/>
                    <div className="tooltip">
                        <span className="add_circle" onClick={this.handleClick}>
                            <i className="material-icons">add_circle</i>
                            <div className="tooltip_popup-add">Add movie</div>
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

const mapStateToProps = (state) => {
    return {
      users: state.firestore.ordered.users,
      user: state.firebase
    }
  }
  
export default compose(
    connect(mapStateToProps, actionCreators),
    firestoreConnect([
       { collection: 'users'},
    ])
  )(MovieCard)