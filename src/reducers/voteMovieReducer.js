

const getMovie = (action) => {
  console.log(action.movie);

  return {
    id: Math.random,
    movie : action.movie
  }
}

const voteMovieReducer = (state = [], action)=> {
  let movies = null;
  switch(action.type) {
    case 'ADD_MOVIE':
      movies = [...state, getMovie(action)];
      return movies;
    default:
        return state
  }
}

export default voteMovieReducer;
