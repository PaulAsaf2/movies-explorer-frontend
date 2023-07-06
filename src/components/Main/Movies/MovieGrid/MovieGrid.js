import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import filmsArray from "./movies";

function MovieGrid() {
  return (
    <main className="movie-grid">
      {filmsArray.map((item) => {
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
