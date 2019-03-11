import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import voteMovieReducer from './voteMovieReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'

export default combineReducers({
  authReducer,
  moviesReducer,
  voteMovieReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

