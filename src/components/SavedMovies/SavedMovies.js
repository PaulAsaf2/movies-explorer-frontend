import { React, useEffect, useContext } from "react";
import Header from '../Header/Header'
import SavedSearchBar from "../SavedSearchBar/SavedSearchBar";
import SavedMovieGrid from "../SavedMovieGrid/SavedMovieGrid";
import Footer from "../Footer/Footer";
import { SavedMoviesContext } from "../../contexts/context";
import preloader from '../../images/preloader.gif'

function SavedMovies({
  handleMenuClick,
  onGetSavedMovies,
  isLoading,
  isMovieAttentionSpan,
  setMovieAttentionSpan,
  onDelete }) {
  const savedMovies = useContext(SavedMoviesContext)

  useEffect(() => {
    setMovieAttentionSpan('У вас пока нет сохранённых фильмов. 😔')
  }, [])

  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <main className="movies">
        <SavedSearchBar onGetSavedMovies={onGetSavedMovies} />
        <div className="movies__separation-line"></div>
        {isLoading
          ? (<img
            src={preloader}
            alt='прелоудер'
            className="movies__preloader" />)
          : savedMovies.length < 1
            ? (<h1 className="movies__not-found">{isMovieAttentionSpan}</h1>)
            : <SavedMovieGrid onDelete={onDelete} />
        }
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;