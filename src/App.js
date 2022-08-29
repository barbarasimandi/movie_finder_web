import './App.css';
import { movies_sample } from "./movies_sample";
import MovieCardList from "./components/MovieCardList";

function App() {
  return (
    <div className="App">
      <MovieCardList
        movies={movies_sample}
      />
    </div>
  );
}

export default App;
