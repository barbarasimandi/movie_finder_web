import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import MovieCardList from "./components/MovieCardList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/v1/movies?search=${search}`);
      setMovies(data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getMovies();
  }, [search])

  const searchHandler = (query) => {
    setSearch(query)
  }

  return (
    <div className="App">
      <SearchForm
        onSearch={searchHandler}
      />
      <MovieCardList
        movies={movies}
      />
    </div>
  );
}

export default App;
