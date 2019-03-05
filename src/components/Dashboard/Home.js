import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index'
import SearchSummary from './SearchSummary';
import VotedMoviesSummary from './VotedMovieSummary';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    }
  
  componentDidMount() {
    this.props.loadMovie()
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to ='/signin' />
    return (
      <div className="home">
        <div className="home__title">select these options</div>
        <div className="home__content-wrapper">
           
          <div className="home__movie-to-add">
           <h5>Select a movie to see</h5>
           <NavLink to='/search' className="home__movie-list">
            <SearchSummary movies={this.props.data.moviesReducer}/>
           </NavLink>
          </div>
          <div className="home__movie-vote">
              <h5>Vote for a movie alerady chosen</h5>
              <NavLink to='/vote' className="home__voted-movie-list">
                <VotedMoviesSummary movies = {this.props.addedMovies}/>
              </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedMovies: state.firestore.ordered.addedMovies,
    data: state,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps, actionCreators),
  firestoreConnect([
     { collection: 'addedMovies'},
     { collection: 'users'},
  ])
)(Home)
