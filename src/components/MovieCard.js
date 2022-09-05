import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardImg, CardFooter, Modal, ModalHeader, ModalBody } from "reactstrap";
import notFound from "../assets/not-found-image.jpeg"
import classes from './MovieCard.module.css'

const MovieCard = ({ movie }) => {
  const [modal, setModal] = useState(false);

  const posterPath = movie.poster_path
  let imageSrc;

  if (posterPath == null) {
    imageSrc = notFound
  }
  else {
    imageSrc = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${posterPath}`
  }

  const releaseYearInfo = movie.release_year ? movie.release_year.slice(0,4) : "Unknown release date"
  const genreInfo = movie.genre_names ? movie.genre_names : "No genres provided"

  const toggle = () => setModal(!modal);

  return(
    <Card>
      <CardImg
        src={imageSrc}
        alt={movie.title}
      />
      <CardBody >
        <CardTitle className={classes.title}>
          {movie.title}
          ({releaseYearInfo})
        </CardTitle>
        <h1 className={classes.vote}>
          {movie.vote_average.toString()}
        </h1>
      </CardBody>
      <Button size="sm" onClick={toggle}>info</Button>
      <CardFooter>
        <span>
          {genreInfo}
        </span>
      </CardFooter>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
        <ModalBody>{movie.overview}</ModalBody>
      </Modal>
    </Card>
  )
}

export default MovieCard
