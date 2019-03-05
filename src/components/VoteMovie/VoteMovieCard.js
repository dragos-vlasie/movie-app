import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index.js'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

export class VoteMovieCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.increaseCount = this.increaseCount.bind(this);
    }
    
    increaseCount(event) {
      const id = event.target.closest('.vote-movie-card').id
      const currentUser = this.props.user.auth.uid
      const users = this.props.users;
        users.map( user => {
          if (user.id === currentUser) {
            this.props.voteMovie(id, user)
          }
        })
      }

    handleClick = (event) => {
      let movieId = event.target.closest(".vote-movie-card").id
      this.props.removeMovie(movieId)
  }

    render() {
      console.log('this.props:', this.props.data)
      if (this.props.data && this.props.data.length !== 0) {
        return (
          <div className="search-results">
            {this.props.data.map(movie => {
              const posterPath = "https://image.tmdb.org/t/p/w185" + movie.posterPath
              return(
                <div key={movie.id} id={movie.id} className="vote-movie-card">
                  <div className="search-result__card" key={movie.id}>
                    <div className="card__image">
                      <img alt="poster" src={posterPath} />
                      <div className="tooltip">
                        <span className="add_circle">
                          <i className="material-icons">add_circle</i>
                          <div className="tooltip_popup-add">Add movie</div>
                        </span>
                        <span className="remove_circle" onClick={this.handleClick}>
                          <i className="material-icons">remove_circle</i>
                          <div className="tooltip_popup-remove">Remove</div>
                        </span>
                      </div>
                    </div>
                    <div className="card__info">
                      <div className="text-center">
                        <span className="card-title">{movie.title}</span>
                        <span className="card-user">Added by: {movie.addedBy}</span>
                      </div>
                      <p className="overview">{movie.content}</p>
                      <div className="view_more">
                        <div className="user-vote">{movie.votedBy && movie.votedBy.map((user, index) => {return <p className="voter" key="{index}">{console.log(index)}{user}.</p>})}</div>
                        <div className='button-list'>
                          <button className='add' onClick={this.increaseCount}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
          )
    } else if (this.props.data && this.props.data.length === 0){
        return (
            <div>No movie added </div>
        )
      } else {
          return (
              <div>Loading</div>
          )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.firestore.ordered.addedMovies,
    users: state.firestore.ordered.users,
    user: state.firebase
  }
}

export default compose(
  connect(mapStateToProps, actionCreators),
  firestoreConnect([
     { collection: 'addedMovies'},
     { collection: 'users'},
  ])
)(VoteMovieCard)

