import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Layout/Header'
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
  const [error, setError] = useState(undefined)

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/v1/movies?search=${search}&page=${currentPage}`);

      if (data.hasOwnProperty('data')) {
        setError(undefined)
        setMovies(data.data);
        setTotalPages(data.total_pages)
      } else {
        setError(data.errors.join(", "))
      }

      if (currentPage === 0) setCurrentPage(1)

    } catch (error) {
      setError(error)
    }
  };

  useEffect(() => {
    getMovies();
  }, [search, setSearch, currentPage, setCurrentPage])

  const searchHandler = (query) => {
    setCurrentPage(0)
    setSearch(query)
  }

  const paginationHandler = (_event, currentPage) => {
    setCurrentPage(currentPage)
  }

  return (
    <div>
      <Header/>
      <div className="body">
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
          page={currentPage}
          count={totalPages}
          variant="outlined"
          onChange={paginationHandler}
        />}
      </div>
    </div>
  );
}

export default App;
