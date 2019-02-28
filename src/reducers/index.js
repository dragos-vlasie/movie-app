import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import voteMovieReducer from './voteMovieReducer'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  moviesReducer,
  voteMovieReducer,
  firestoreReducer
})

