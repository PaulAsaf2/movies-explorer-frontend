/* eslint-disable react-hooks/exhaustive-deps */
import { React, useContext, useEffect, useState } from "react";
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import Footer from "../Footer/Footer";
import { MoviesContext } from "../../contexts/context";
import preloader from '../../images/preloader.gif'
import * as con from '../../utils/constants'

function Movies(props) {
  const [visibleItems, setVisibleItems] = useState(getItemsPerPage(window.innerWidth))
  const movies = useContext(MoviesContext)

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getItemsPerPage(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    props.setMovieAttentionSpan('')

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleLoadMore() {
    if (window.innerWidth > con.tabletBreakpoint) {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + con.addMoviesDesktop)
      return
    }
    if (window.innerWidth > con.phoneBreakpoint) {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + con.addMoviesTablet)
      return
    } else {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + con.addMoviesPhone)
      return
    }
  }

  function getItemsPerPage(width) {
    if (width > con.tabletBreakpoint) { return con.initMoviesDesktop }
    if (width > con.phoneBreakpoint) { return con.initMoviesTablet }
    else { return con.initMoviesPhone }
  }

  return (
    <>
      <Header handleMenuClick={props.handleMenuClick} />
      <main className="movies">
        <SearchBar onGetMovies={props.onGetMovies} />
        <div className="movies__separation-line"></div>
        {props.isLoading
          ? (<img
            src={preloader}
            alt='прелоудер'
            className="movies__preloader" />)
          : movies.length < 1
            ? (<h1 className="movies__not-found">{props.isMovieAttentionSpan}</h1>)
            : <MovieGrid
              visibleItems={visibleItems}
              onLike={props.onLike} />
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