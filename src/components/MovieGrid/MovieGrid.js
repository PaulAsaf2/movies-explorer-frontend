import { React, useContext } from "react";
import { useMatch } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import { MoviesContext } from "../../contexts/moviesContext";

function MovieGrid() {
  const movies = useContext(MoviesContext)
  console.log(movies);
  const movieGridStyle = `movie-grid ${useMatch('/saved-movies') && 'movie-grid_saved'}`

  return (
    <main className={movieGridStyle}>
      {movies.map((item) => {
        return (
          <MovieCard
            key={item.id}
            image={`https://api.nomoreparties.co/${item.image.url}`}
            nameRU={item.nameRU}
            description={item.description}
            duration={item.duration}
            trailerLink={item.trailerLink}
          />
        )
      })}
    </main>
  )
}

export default MovieGrid;
