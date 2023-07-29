import { React, useContext, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { MoviesContext, SavedMoviesContext } from "../../contexts/moviesContext";

function MovieGrid({ visibleItems, onLike
  // , isLiked
 }) {
  // const [isLiked, setIsLiked] = useState(false)
  const movies = useContext(MoviesContext)
  const savedMovies = useContext(SavedMoviesContext)


  return (
    <main className='movie-grid'>
      {movies.slice(0, visibleItems).map((item) => {
        return (
          <MovieCard
            key={item.id}
            movie={item}
            onLike={onLike}
            isLiked={isLiked} />
        )
      })}
    </main>
  )
}

export default MovieGrid;
