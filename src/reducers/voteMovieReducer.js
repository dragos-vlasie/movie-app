

const getMovie = (action) => {
  return {
    movie : action.movie
  }
}

const voteMovieReducer = (state = [], action)=> {
  let movies = null;
  switch(action.type) {
    case 'ADD_MOVIE':
      movies = [...state, getMovie(action)];
      return movies;
    case 'ERROR_MOVIE':
      console.log('error', action.err)
      return state;
    case 'VOTE_RECEIVED':
      return {
        message: 'Success'
      }
    case 'VOTE_ERROR':
      return {
        message: action.err
      }
    default:
        return state
  }
}

export default voteMovieReducer;
