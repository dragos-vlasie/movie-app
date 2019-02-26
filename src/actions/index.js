import axios from 'axios';

const apiKey = "e99043e1b44f1a6d68049b97f2e11003"
export function loadMovie() {
    return (dispatch) => {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`)
        .then((res) => {dispatch(movieResult(res.data.results))});
    }
}

export function movieResult(movies) {
    return {
        type: "GET_MOVIES",
        movies: movies
    }
}

export function searchMovie(searchTerm) {
    return (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
    .then((res) => {dispatch(movieList(res.data.results))});
    }
}

export function movieList(movies) {
    return {
        type: "SEARCH_MOVIES",
        movies: movies
    }
}


    

export const addMovie = (id) => {
    console.log(id);
    const movieId = id;
    return (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then((res) => {dispatch(sendID(res.data))});
    }
}
    export function sendID(movie) {
        console.log('movie:', movie)

        const action = {
            type: "ADD_MOVIE",
            movie: movie
          }
        return action;
      }
