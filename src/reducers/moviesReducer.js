

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
   // case 'ADD_MOVIE':
   // console.log(action.movie);
   //   return {
   //     movie: action.movie
   //   }
   default:
       return state
}
}

export default moviesReducer;
