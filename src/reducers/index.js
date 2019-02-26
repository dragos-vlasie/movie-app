import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import voteMovieReducer from './voteMovieReducer'

export default combineReducers({
  moviesReducer,
  voteMovieReducer
})

