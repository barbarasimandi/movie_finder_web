import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardFooter } from "reactstrap";
import classes from './MovieCard.module.css'

const MovieCard = ({ movie }) => {
  return(
    <Card>
      <CardImg
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie["attributes"].poster_path}`}
        alt={movie["attributes"].title}
      />
      <CardBody >
        <CardTitle className={classes.title}>
          {movie["attributes"].title} ({movie["attributes"].release_year || "Unknown Release Date"})
        </CardTitle>
        <h1 className={classes.vote}>
          {movie["attributes"].vote_average.toString()}
        </h1>
      </CardBody>
      <CardFooter>
        <span>
          {movie["attributes"].genre_names}
        </span>
      </CardFooter>
    </Card>
  )
}

export default MovieCard
