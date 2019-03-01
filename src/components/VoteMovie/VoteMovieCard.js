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
      this.decreaseCount = this.decreaseCount.bind(this);
    }
    
    decreaseCount() {

    }
    
    increaseCount(event) {
      // const id = event.target.closest('.vote-movie-card').id
      console.log(this.props.user.auth.uid)
      console.log(this.props.users)
    }

    handleClick = (event) => {
      let movieId = event.target.closest(".vote-movie-card").id

      this.props.removeMovie(movieId)
  }

    render() {
      console.log('this.props.users:', this.props.users)
      if (this.props.data) {
        return (
          <div className="row search-results">
            {this.props.data.map(movie => {
              const posterPath = "https://image.tmdb.org/t/p/w185" + movie.posterPath
              return(
                <div key={movie.id} id={movie.id} className="vote-movie-card">
                  <div className="search-result__card" key={movie.id}>
                    <div className="card__image">
                      <img alt="poster" width="185" height="278" src={posterPath} />
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
                      </div>
                      <p className="overview">{movie.content}</p>
                      <div className="view_more">
                        <p className='counter-item-votes'
                          style={this.state.count > 5 ? { color: 'lightgreen' } : null}
                        >{this.state.count}
                          <i data-icon="ei-like" data-size="s"></i>
                        </p>
                        <div className='button-list'>
                          <button className='minus' onClick={this.decreaseCount}>-</button>
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
    } else {
        return (
            <div>asta e coaie</div>
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

