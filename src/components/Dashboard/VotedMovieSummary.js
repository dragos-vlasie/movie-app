import React from "react";

const VotedMovieSummary = ({ movies }) => {
  return (
    <div className="voted-movie__list">
      {movies && movies.map(movie => {
          return (
            <div key={movie.id} id={movie.id} className="voted-movie">
              <div className="voted-movie__poster">
                <img alt="poster" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
              </div>
              <div className="voted-movie__content">
                <div className="voted-movie__overview">
                    <p className="voted-movie__addedBy">{movie.addedBy} Pick</p>
                    <p className="m-0">{movie.overview}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default VotedMovieSummary;
