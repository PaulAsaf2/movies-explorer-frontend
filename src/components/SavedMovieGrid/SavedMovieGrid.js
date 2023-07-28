import { React, useContext } from "react";
import SavedMovieCard from "../SavedMovieCard/SavedMovieCard";
import { SavedMoviesContext } from "../../contexts/moviesContext";

function SavedMovieGrid({onDelete}) {
  const savedMovies = useContext(SavedMoviesContext)

  return (
    <main className='movie-grid movie-grid_saved'>
      {savedMovies.map((item) => {
        return (
          <SavedMovieCard
            key={item.id}
            movie={item}
            onDelete={onDelete}
          />
        )
      })}
    </main>
  )
}

export default SavedMovieGrid;
