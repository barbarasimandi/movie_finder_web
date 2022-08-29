import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = ({ movies }) => {
  return (
    <div className="row justify-content-sm-between">
      {movies && movies.map((movie) => (
        <div
          className="col-lg-3 col-sm-4 col-md-3 "
          style={{padding: 20}}
          key={movie.id}
        >
          <MovieCard movie={movie["attributes"]}/>
        </div>
      ))}
    </div>
  );
};

export default MovieCardList;
