import React from "react";
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import Footer from "../Footer/Footer";

function Movies({ handleMenuClick, filterText, onFilterTextChange, onGetMovies }) {
  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <main className="movies">
        <SearchBar
          filterText={filterText}
          onFilterTextChange={onFilterTextChange}
          onGetMovies={onGetMovies} />
        <div className="movies__separation-line"></div>
        <MovieGrid filterText={filterText} />
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