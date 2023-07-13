import { React } from "react";
import Media from "react-media";
import ToggleFilms from "./ToggleFilms/ToggleFilms";
import useFormAndValidation from "../hooks/useFormAndValidation";

function handleToggle(state) {
  console.log('Toggled:', state);
}

function SearchBar() {
  const { values, handleChange } = useFormAndValidation();

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
                  minLength="2"
                  maxLength="40"
                  placeholder="Фильм"
                  className="search-bar__input"
                  onInput={handleChange}
                  value={values.search || ''}
                />
                <button
                  className="search-bar__button"
                  type="submit">
                </button>
              </form>
            </section >
            <div className="search-bar__container">
              <ToggleFilms
                toggled={true}
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
                minLength="2"
                maxLength="40"
                placeholder="Фильм"
                className="search-bar__input"
                onInput={handleChange}
                value={values.search || ''}
              />
              <button
                className="search-bar__button"
                type="submit">
              </button>
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