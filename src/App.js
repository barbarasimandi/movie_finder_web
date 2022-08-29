import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardList from "./components/MovieCardList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/v1/movies?search=The`);
      setMovies(data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <MovieCardList
        movies={movies}
      />
    </div>
  );
}

export default App;
