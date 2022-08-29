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
          ({movie.release_year || "Unknown Release Date"})
        </CardTitle>
      </CardBody>
      <Button size="sm" onClick={toggle}>info</Button>
      <CardFooter>
        <span>
          {movie.genre_names || "No genres provided." }
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
