import { React, useState } from "react";
import Media from "react-media";
import ToggleFilms from "./ToggleFilms/ToggleFilms";
import useFormAndValidation from "../hooks/useFormAndValidation";

function handleToggle(state) {
  console.log('Toggled:', state);
}

function SearchBar() {
  const { values, handleChange, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);
  const errorMessage = 'Нужно ввести ключевое слово'
  const submitError = `search-bar__button ${(!isValid || !submitButton) && 'search-bar__button_disabled'}`

  function handleSubmitButton(event) {
    event && setSubmitButton(true)
    handleSearch(event)
  }

  function handleSearch(event) {
    console.log(event.target.value);
  }

  return (
    <Media query={{ maxWidth: 620 }}>
      {matches =>
        matches ? (
          <>
            <section className="search-bar">
              <form
                name="search"
                noValidate
                className="search-bar__form"
              >
                <input
                  required
                  type="search"
                  id="search"
                  name="search"
                  minLength="1"
                  maxLength="40"
                  placeholder="Фильм"
                  className="search-bar__input"
                  onInput={handleChange}
                  onChange={handleSubmitButton}
                  value={values.search || ''}
                />
                <span
                  className="search-bar__span">
                  {!isValid && errorMessage}
                </span>
                <button
                  className={submitError}
                  type="submit"
                  onClick={handleSearch}>
                </button>
              </form>
            </section >
            <div className="search-bar__container">
              <ToggleFilms
                toggled={false}
                onClick={handleToggle}
              />
              <p className="search-bar__text">Короткометражки</p>
            </div>
          </>
        ) : (
          <section className="search-bar">
            <form
              name="search"
              noValidate
              className="search-bar__form"
            >
              <input
                required
                type="search"
                id="search"
                name="search"
                minLength="1"
                maxLength="40"
                placeholder="Фильм"
                className="search-bar__input"
                onInput={handleChange}
                onChange={handleSubmitButton}
                value={values.search || ''}
              />
              <span
                className="search-bar__span">
                {!isValid && errorMessage}
              </span>
              <button
                className={submitError}
                type="submit"
                onClick={handleSearch}>
              </button>
            </form>
            <div className="search-bar__separation-line"></div>
            <ToggleFilms
              toggled={false}
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