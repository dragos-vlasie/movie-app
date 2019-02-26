


const voteMovieReducer = (state = 0, action)=> {
switch(action.type){
   case 'ADD_MOVIE':
     return {
       movie: action.movie
     }
   default:
       return state
}
}

export default voteMovieReducer;
