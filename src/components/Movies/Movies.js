/* eslint-disable react-hooks/exhaustive-deps */
import { React, useContext, useEffect, useState } from "react";
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import Footer from "../Footer/Footer";
import { MoviesContext } from "../../contexts/moviesContext";
import preloader from '../../images/preloader.gif'

function Movies({ handleMenuClick, onGetMovies, isLoading, isMovieAttentionSpan, setMovieAttentionSpan }) {
  const [visibleItems, setVisibleItems] = useState(getItemsPerPage(window.innerWidth))
  const movies = useContext(MoviesContext)
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getItemsPerPage(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    setMovieAttentionSpan('')

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleLoadMore() {
    if (window.innerWidth > 768) {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 4)
      return
    }
    if (window.innerWidth > 420) {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 2)
      return
    } else {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 5)
      return
    }
  }

  function getItemsPerPage(width) {
    if (width > 768) { return 16 }
    if (width > 420) { return 8 }
    else { return 5 }
  }

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
            : <MovieGrid visibleItems={visibleItems} />
        }
        {(visibleItems < movies.length) && (
          <button
            className="movies__button"
            type="button"
            onClick={handleLoadMore}>
            Ещё
          </button>)}
      </main>
      <Footer />
    </>
  )
}

export default Movies;