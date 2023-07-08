import React from "react";
import Media from "react-media";
import ToggleFilms from "./ToggleFilms/ToggleFilms";

function handleToggle(state) {
  console.log('Toggled:', state);
}

function SearchBar() {
  return (
    <Media query={{ maxWidth: 320 }}>
      {matches =>
        matches ? (
          <>
            <section className="search-bar">
              <form className="search-bar__form">
                <input className="search-bar__input" type="search" placeholder="Фильм" />
                <button className="search-bar__button" type="submit"></button>
              </form>
            </section >
            <div className="search-bar__container">
              <ToggleFilms toggled={true} onClick={handleToggle} />
              <p className="search-bar__text">Короткометражки</p>
            </div>
          </>
        ) : (
          <section className="search-bar">
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
          </section >
        )
      }
    </Media >

  )
}

export default SearchBar;