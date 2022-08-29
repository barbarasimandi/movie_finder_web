import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import MovieCardList from "./components/MovieCardList";
import Pagination from '@mui/material/Pagination';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/v1/movies?search=${search}&page=${currentPage}`);
      setMovies(data.data);
      setTotalPages(data.total_pages)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getMovies();
  }, [search, currentPage])

  const searchHandler = (query) => {
    setSearch(query)
  }

  const paginationHandler = (event, currentPage) => {
    event.preventDefault();
    setCurrentPage(currentPage)
  }

  return (
    <div className="App">
      <SearchForm
        onSearch={searchHandler}
      />
      <MovieCardList
        movies={movies}
      />
      {totalPages > 1 &&
      <Pagination
        showFirstButton={true}
        showLastButton={true}
        count={totalPages}
        onChange={paginationHandler}
      />}
    </div>
  );
}

export default App;
