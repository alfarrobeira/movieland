import React from "react";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
const MovieCard = ({movie}) => {
  return (
    <div key={movie.imdbID} className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
