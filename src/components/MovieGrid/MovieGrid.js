import { React, useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { MoviesContext } from "../../contexts/moviesContext";

function MovieGrid({ visibleItems, onLike }) {
  const movies = useContext(MoviesContext)

  return (
    <main className='movie-grid'>
      {movies.slice(0, visibleItems).map((item) => {
        return (
          <MovieCard
            key={item.id}
            movie={item}
            onLike={onLike}
          />
        )
      })}
    </main>
  )
}

export default MovieGrid;
