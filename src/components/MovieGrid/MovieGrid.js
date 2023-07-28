import { React, useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { MoviesContext } from "../../contexts/moviesContext";

function MovieGrid({ visibleItems }) {
  const movies = useContext(MoviesContext)


  return (
    <main className='movie-grid'>
      {movies.slice(0, visibleItems).map((item) => {
        return (
          <MovieCard
            key={item.id}
            movie={item} />
        )
      })}
    </main>
  )
}

export default MovieGrid;
