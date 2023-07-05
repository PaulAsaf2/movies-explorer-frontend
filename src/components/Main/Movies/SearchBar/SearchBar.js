import React from "react";
import ToggleFilms from "./ToggleFilms/ToggleFilms";

function handleToggle(state) {
  console.log('Toggled:', state);
}

function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <input className="search-bar__input" type="search" placeholder="Фильм" />
        <button className="search-bar__button" type="submit"></button>
      </form>
      <div className="search-bar__separation-line"></div>
      <ToggleFilms
        toggled={true}
        onClick={handleToggle}
      />
      <p className="search-bar__text">Короткометражки</p>
    </div>
  )
}

export default SearchBar;