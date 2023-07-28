import {React, useEffect} from "react";
import Header from '../Header/Header'
import SavedSearchBar from "../SavedSearchBar/SavedSearchBar";
import SavedMovieGrid from "../SavedMovieGrid/SavedMovieGrid";
import Footer from "../Footer/Footer";
// import { MoviesContext } from "../../contexts/moviesContext";
import preloader from '../../images/preloader.gif'

function SavedMovies({ 
  handleMenuClick,
  isLoading,
  isMovieAttentionSpan,
  setMovieAttentionSpan }) {
  // const movies = useContext(MoviesContext)
  const movies = []

  useEffect(() => {
    setMovieAttentionSpan('')
  }, [])

  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <main className="movies">
        <SavedSearchBar />
        <div className="movies__separation-line"></div>
        {isLoading
          ? (<img
            src={preloader}
            alt='прелоудер'
            className="movies__preloader" />)
          : movies.length < 1
            ? (<h1 className="movies__not-found">{isMovieAttentionSpan}</h1>)
            : <SavedMovieGrid />
        }
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;