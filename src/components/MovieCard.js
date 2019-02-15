import React from 'react'

const MovieCard = (props) => {
    const { data, search } = this.props;
    const dataResult = data.length ? (
          data.map(movie => {
           let posterPath = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            return (
              <div className="post card col l6" key={movie.id}>
                <div className="card-content">
                  <div className="row">
                    <div className="col l5 m5 s12">
                      <img alt="poster" width="185" height="278" src={posterPath}/>
                    </div>
                    <div className="col l6  m6  push-m1 push-l1 s12">
                      <span className="card-title">{movie.title}</span>
                      <p>{movie.overview.slice(0,260)+ '...'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )
        : (
            <div className="center">No data to show</div>
        );
}

export default MovieCard
