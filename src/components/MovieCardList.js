import * as React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = ({movies}) => {
  return (
    <div className="row justify-content-sm-between">
      {movies && movies.map((movie) => (
        <div
          className="col-lg-3 col-sm-4 col-md-3 "
          style={{paddingBlock: 30, padding: 40}}
          key={movie.id}
        >
          <MovieCard movie={movie}/>
        </div>
      ))}
    </div>
  );
};

export default MovieCardList;
