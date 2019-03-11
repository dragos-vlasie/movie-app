import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class MovieCard extends Component {
    constructor(props) {
        super(props)
		
      this.sendMovieID = this.sendMovieID.bind(this);
      this.addVote = this.addVote.bind(this);
      this.removeMovie = this.removeMovie.bind(this);
    }

    addVote(event) {
        event.preventDefault() 
        const id = event.target.closest('.vote-movie-card').id
        const currentUser = this.props.user.auth.uid
        const users = this.props.users;

          users.map( user => {
              if (user.id === currentUser) {
              this.props.voteMovie(id, user)
            }
          })
    }

    removeMovie = (event) => {
        let movieId = event.target.closest(".vote-movie-card").id
        this.props.removeMovie(movieId)
    }
    
    sendMovieID = (event) => {
        let box = event.target;
        let Id = event.target.closest('.search-result__card').id
        const currentUser = this.props.user.auth.uid
        const users = this.props.users;
        const addedMovies = this.props.addedMovies;

        var movieAlreadyAdded = addedMovies.filter(movie => {
            return movie.added 
        })
        
        if(movieAlreadyAdded.length) {
            users.map( user => {
              if (user.id === currentUser) {
                  this.props.addMovie(user, Id)
              }
            })
        }
        box.textContent= "check_circle";
        let text = event.target.nextElementSibling
        text.textContent = 'Added'
    }
    
    renderViewMore = (movie) => {
        if (movie.added) {
            return (
              <div className="view_more">
                  <div className="user-vote">
                    {movie.votedBy && movie.votedBy.map((user, index) => 
                        { return <p className="voter" key="{index}">{user}.</p> })}
                    </div>
                    <div className="button-list">
                        <a className="add btn-floating btn-small waves-effect waves-light red" href="£" onClick={this.addVote}>
                            <i className="material-icons">add</i>
                        </a>
                    </div>
                 <span className="card-user">Added by: {movie.addedBy}</span> 
              </div>
          )
        } else {
                return (
                    <div className="view_more">
                        <a className="result" href={`https://www.themoviedb.org/movie/${movie.id}`}>More Info</a>
                    </div>
                 ) 
          }
    }

    renderTooltip = (movie) => {
        if (!movie.added) {
           return( 
                 <span className="add_circle" onClick={this.sendMovieID}>
                    <i className="material-icons">add_circle</i>
                    <div className="tooltip_popup-add">Add movie</div>
                </span>)
            } else {
                return (
                    <span className="remove_circle" onClick={this.removeMovie}>
                        <i className="material-icons">remove_circle</i>
                        <div className="tooltip_popup-remove">Remove</div>
                    </span>
                )
            }
    }

    render() {
        const { movie } = this.props;
        return (
            <div className={  (movie.added ? ' vote-movie-card' : ' search-result__card')} id={movie.id}>
                <div className="card__image">
                    <img alt="poster" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}/>
                    <div className="tooltip">
                    {this.renderTooltip(movie)}
                    </div>
                </div>
                <div className="card__info">
                    <div className="text-center">
                        <span className="card-title">{movie.original_title}</span>
                    </div>
                    <p className="overview">{movie.overview}</p>
                    {this.renderViewMore(movie)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      addedMovies: state.firestore.ordered.addedMovies,
      users: state.firestore.ordered.users,
      user: state.firebase
    }
  }
  
export default compose(
    connect(mapStateToProps, actionCreators),
    firestoreConnect([
        { collection: 'addedMovies'},
        { collection: 'users'}
    ])
  )(MovieCard)