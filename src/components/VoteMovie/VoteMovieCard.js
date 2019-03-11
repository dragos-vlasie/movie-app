import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index.js'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import MovieCard from '../SearchMovie/MovieCard.js';

export class VoteMovieCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      const data = this.props.data
      if (data && data.length !== 0) {
        return (
           <div className="movies-to-vote">  
                {data.map(movie => {
                  return(
                    <MovieCard movie = {movie} key ={movie.id}/>
                  )
                })}
            </div>
          )
    } else if (data && data.length === 0){
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

