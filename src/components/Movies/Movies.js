import { React, useContext } from "react";
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import Footer from "../Footer/Footer";
import { MoviesContext } from "../../contexts/moviesContext";
import preloader from '../../images/preloader.gif'

function Movies({ handleMenuClick, onGetMovies, isLoading, isMovieAttentionSpan }) {
  const movies = useContext(MoviesContext)


  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <main className="movies">
        <SearchBar onGetMovies={onGetMovies} />
        <div className="movies__separation-line"></div>
        {isLoading
          ? (<img
            src={preloader}
            alt='прелоудер'
            className="movies__preloader" />)
          : movies.length < 1
            ? (<h1 className="movies__not-found">{isMovieAttentionSpan}</h1>)
            : <MovieGrid />
        }
        <button
          className="movies__button"
          type="button">
          Ещё
        </button>
      </main>
      <Footer />
    </>
  )
}

export default Movies;