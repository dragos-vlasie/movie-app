import React from 'react'
import MovieCard from './MovieCard';

const MovieList = (props) => {
    if (props.movies.moviesReducer.movies) {
        return (
          <div className="search-results">
          {props.movies.moviesReducer.movies.map(movie => {
            let posterPath =""
            if (movie.poster_path == null) {
              posterPath ="https://www.placecage.com/200/300"
            } else{
              posterPath = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            }
            const url = "https://www.themoviedb.org/movie/" + movie.id
            return (<MovieCard movie = {movie} posterPath = {posterPath} url = {url} id= {movie.id} key={movie.id}/>)
            })}
            </div> 
          )
    } else {
        return (
            <div>Loading</div>
        )
    }
}

export default MovieList


