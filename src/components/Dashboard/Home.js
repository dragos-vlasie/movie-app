import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index'
import SearchSummary from './SearchSummary';
import { Redirect } from 'react-router-dom';

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
            <SearchSummary movies={this.props.data.moviesReducer}/>
          </div>
          <div className="home__movie-vote">
          <h1>vote for movie alerady chosen</h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps, actionCreators)(Home);
