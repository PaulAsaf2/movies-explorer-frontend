import React from "react";
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchBar />
      <div className="movies__separation-line"></div>
      <MovieGrid />
      <button className="movies__button" type="button">Ещё</button>
    </div>
  )
}

export default Movies;