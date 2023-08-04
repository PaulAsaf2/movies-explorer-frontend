import { React, useState, useEffect } from "react";
import Media from "react-media";
import { searchbarBreakpoint } from '../../utils/constants'

function SavedSearchBar({ onGetSavedMovies }) {
  const [filterText, setFilterText] = useState('')
  const [isShortFilm, setIsShortFilm] = useState(false)
  const [initialState, setInitialState] = useState(false)

  useEffect(() => {
    if (!initialState) return
    handleSubmitForm(new Event("submit"));
  }, [isShortFilm, initialState])

  function handleToggleFilms() {
    setIsShortFilm(!isShortFilm)
    setInitialState(true)
  }

  function handleSubmitForm(event) {
    event.preventDefault()
    onGetSavedMovies(filterText, isShortFilm)
  }

  return (
    <Media query={{ maxWidth: searchbarBreakpoint }}>
      {matches => !matches ? (
        <section className="search-bar">
          <form
            name="search-saved-movies"
            onSubmit={handleSubmitForm}
            noValidate
            className="search-bar__form" >
            <input
              required
              autoComplete="off"
              type="search"
              id="search"
              name="search"
              minLength="1"
              maxLength="40"
              placeholder="Фильм"
              className="search-bar__input"
              onChange={(e) => setFilterText(e.target.value)}
              value={filterText || ''} />
            <button
              className='search-bar__button'
              type="submit" >
            </button>
          </form>
          <div className="search-bar__separation-line"></div>
          <label className="toggle">
            <input
              className="toggle__input"
              type="checkbox"
              checked={isShortFilm}
              onChange={handleToggleFilms} />
            <span className="toggle__span" />
          </label>
          <p className="search-bar__text">Короткометражки</p>
        </section >
      ) : (
        <section className="search-bar">
          <form
            name="search-saved-movies"
            onSubmit={handleSubmitForm}
            noValidate
            className="search-bar__form" >
            <input
              required
              type="search"
              id="search"
              name="search"
              minLength="1"
              maxLength="40"
              placeholder="Фильм"
              className="search-bar__input"
              onChange={(e) => setFilterText(e.target.value)}
              value={filterText || ''} />
            <button
              className='search-bar__button'
              type="submit" >
            </button>
          </form>
          <div className="search-bar__container">
            <label className="toggle">
              <input
                className="toggle__input"
                type="checkbox"
                checked={isShortFilm}
                onChange={handleToggleFilms} />
              <span className="toggle__span" />
            </label>
            <p className="search-bar__text">Короткометражки</p>
          </div>
        </section >
      )
      }
    </Media >
  )



}

export default SavedSearchBar;