

let data = [
     ]

const mainReducer = (state = data, action)=> {
    switch(action.type){
        case 'GET_MOVIES':
          return {
            movies: action.movies
          }
        case 'SEARCH_MOVIES':
          return {
            movies: action.movies
          }
        case 'ADD_MOVIE':
          return {
            movie: action.movie
          }
        default:
            return state
    }
}

export default mainReducer;
