import React from "react";
import { movies_sample } from "./movies_sample";
import MovieCardList from "./components/MovieCardList";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const movies = movies_sample

  return (
    <div className="App">
      <MovieCardList
        movies={movies}
      />
    </div>
  );
}

export default App;
