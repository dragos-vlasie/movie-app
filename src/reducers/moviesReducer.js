

let data = [
]

const moviesReducer = (state = data, action)=> {
switch(action.type){
   case 'GET_MOVIES':
     return {
       movies: action.movies
     }
    case 'GET_MOVIES_ERROR':
    return {
      error : action.err
    }
   case 'SEARCH_MOVIES':
     return {
       movies: action.movies
     }
   case 'SEARCH_MOVIES_ERROR':
     return {
       error: action.err
     }
   default:
       return state
}
}

export default moviesReducer;
