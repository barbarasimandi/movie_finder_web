import React from "react";

const MovieCard = ({ movie }) => {
  return(
    <div>
      <h2>{movie["attributes"].title}</h2>
      <p>{movie["attributes"].overview}</p>
      <p>{movie["attributes"].poster_path}</p>
      <p>{movie["attributes"].vote_average}</p>
      <p>{movie["attributes"].release_year}</p>
      <p>{movie["attributes"].genre_names}</p>
    </div>
  )
}

export default MovieCard
