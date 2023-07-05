import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <input className="search-bar__input" type="search" placeholder="Фильм" />
        <button className="search-bar__button" type="submit"></button>
      </form>
      <div className="search-bar__separation-line"></div>
      <div className="search-bar__toggle"></div>
      <p className="search-bar__text">Короткометражки</p>
    </div>
  )
}

export default SearchBar;