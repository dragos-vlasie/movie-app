import React from "react";

const VotedMovieSummary = ({ movies }) => {
  return (
    <div className="voted-movie__list">
      {movies &&
        movies.map(movie => {
          const posterPath =
            "https://image.tmdb.org/t/p/w185" + movie.posterPath;
          return (
            <div key={movie.id} id={movie.id} className="voted-movie">
              <div className="voted-movie__poster">
                <img alt="poster" src={posterPath} />
              </div>
              <div className="voted-movie__content">
                <div className="voted-movie__overview">
                    <p className="voted-movie__addedBy">{movie.addedBy} Pick</p>
                    <p className="m-0">{movie.content}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default VotedMovieSummary;
