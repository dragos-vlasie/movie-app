import React from 'react'

const SearchSummary = (props) => {
    if (props.movies.movies) {
        return (
          props.movies.movies.map(movie => {
            let posterPath =""
            if (movie.poster_path == null) {
               posterPath ="https://www.placecage.com/200/300"
            } else{
               posterPath = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            }
              return (
                  <div className="search-summary"key={movie.id}>
                      <img alt="poster" width="185" height="278" src={posterPath}/>
                  </div>
              )
            })
          )
    } else {
        return (
            <div>Loading</div>
        )
    }
}

export default SearchSummary
