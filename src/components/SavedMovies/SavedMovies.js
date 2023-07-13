import React from "react";
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import Footer from "../Footer/Footer";

function SavedMovies({ handleMenuClick }) {
  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <main className="movies">
        <SearchBar />
        <div className="movies__separation-line"></div>
        <MovieGrid />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;