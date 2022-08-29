import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = ({ movies }) => {
  return (
    <div>
      {movies && movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  )
}

export default MovieCardList
