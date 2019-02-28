

let data = [
]

const moviesReducer = (state = data, action)=> {
switch(action.type){
   case 'GET_MOVIES':
     return {
       movies: action.movies
     }
   case 'SEARCH_MOVIES':
     return {
       movies: action.movies
     }
   default:
       return state
}
}

export default moviesReducer;
