import { React, useState } from "react";
import Media from "react-media";

function SavedSearchBar({ onGetSavedMovies }) {
  const [filterText, setFilterText] = useState('')
  const [isShortFilm, setIsShortFilm] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmitForm(event) {
    event.preventDefault()
    if (!filterText) {
      setErrorMessage('Нужно ввести ключевое слово')
      return
    }
    setErrorMessage('')
    onGetSavedMovies(filterText, isShortFilm)
  }

  return (
    <Media query={{ maxWidth: 620 }}>
      {matches => !matches ? (
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
            <span
              className="search-bar__span">
              {errorMessage}
            </span>
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
              onChange={() => setIsShortFilm(!isShortFilm)} />
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
            <span
              className="search-bar__span">
              {errorMessage}
            </span>
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
                onChange={() => setIsShortFilm(!isShortFilm)} />
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