import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index.js'

export class VoteMovieCard extends Component {
        constructor(props) {
          super(props);
          this.state = {
            count: 0
          };
          
          this.decreaseCount = this.decreaseCount.bind(this);
          this.increaseCount = this.increaseCount.bind(this);
        }
        
         decreaseCount() {
          this.setState(() => {
            return {count: this.state.count === 0 ? 0 : this.state.count - 1}
          });
        }
        
        increaseCount() {
          this.setState(() => {
            return {count: this.state.count + 1}
          });
        }

        // componentDidMount() {
        //   this.props.searchMovie()
        // }

  render() {
    if (this.props.data.voteMovieReducer) {
      return (
        <div className="row search-results">
          {this.props.data.voteMovieReducer.map(movie => {
            const posterPath = "https://image.tmdb.org/t/p/w185" + movie.movie.poster_path
            return(
              <div key={movie.movie.id} className="vote-movie-card">
                {/* <div>
                  <div className="vote-movie-card">
                    <div className="post card">
                      <div className="movie-card__poster">
                        <img alt="poster" width="215" height="300" src={posterPath}></img>
                      </div>
                    <div className="movie-card__content">
                      <div className="movie-card__description">
                        <span className="card-title">{movie.movie.original_title}</span>
                        <p>{movie.movie.overview}</p>
                      </div>

                      <div className="movie-card__votes">
                        
                        <div className='button-list'>
                          <button className='minus' onClick={this.decreaseCount}>-</button>
                          <button className='add' onClick={this.increaseCount}>+</button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="search-result__card" key={movie.movie.id}>
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
                    <span className="card-title">{movie.movie.original_title}</span>
                </div>
                <p className="overview">{movie.movie.overview}</p>
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
    data: state
  }
}


export default connect(mapStateToProps, actionCreators)(VoteMovieCard)

