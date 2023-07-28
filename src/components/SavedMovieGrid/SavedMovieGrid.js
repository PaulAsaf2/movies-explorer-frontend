import { React } from "react";
import SavedMovieCard from "../SavedMovieCard/SavedMovieCard";
// import { MoviesContext } from "../../contexts/moviesContext";

function SavedMovieGrid() {
  // const movies = useContext(MoviesContext)
  const movies = []

  return (
    <main className='movie-grid movie-grid_saved'>
      {movies.map((item) => {
        return (
          <SavedMovieCard
            key={item.id}
            image={item.image}
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

export default SavedMovieGrid;
