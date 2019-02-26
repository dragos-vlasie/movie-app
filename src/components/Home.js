import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js'
import SearchSummary from './SearchSummary.js';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    }
  
  componentDidMount() {
    this.props.loadMovie()
  }

  render() {
    console.log('data:', this.props.data.moviesReducer.movies)
    return (
      <div className="home">
        <div className="home__title">select these options</div>
        <div className="home__content-wrapper">
          <div className="home__movie-to-add">
            <SearchSummary movies={this.props.data.moviesReducer}/>
          </div>
          <div className="home__movie-vote">
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actionCreators)(Home);
