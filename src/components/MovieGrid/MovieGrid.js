import React from "react";
import { useMatch } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import filmsArray from "./movies";
import savedMoviesArray from './savedMovies'

function MovieGrid() {
  const arrayOfMovies = useMatch('/movies') ? filmsArray : savedMoviesArray
  const movieGridStyle = `movie-grid ${useMatch('/saved-movies') && 'movie-grid_saved'}`
  return (
    <main className={movieGridStyle}>
      {arrayOfMovies.map((item) => {
        return (
          <MovieCard
            key={item.movieId}
            image={item.image}
            nameRU={item.nameRU}
            description={item.description}
            duration={item.duration}
          />
        )
      })}
    </main>
  )
}

export default MovieGrid;
