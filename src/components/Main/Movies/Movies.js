import React from "react";
import MainHeader from '../MainHeader/MainHeader'
import SearchBar from '../Movies/SearchBar/SearchBar'
import MovieGrid from '../Movies/MovieGrid/MovieGrid'

function Movies() {
  return (
    <div className="movies">
      <MainHeader />
      <SearchBar />
      <div className="movies__separation-line"></div>
      <MovieGrid />
      <button className="movies__button" type="button">Ещё</button>
    </div>
  )
}

export default Movies;