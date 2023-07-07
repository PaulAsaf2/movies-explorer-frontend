import {React, useState} from "react";
import logoC from '../../../images/logo-c.svg';
import { Link, useMatch } from 'react-router-dom';
import Media from "react-media";
import MenuButton from "./MenuButton/MenuButton";

function MainHeader() {
  const [open, setOpen] = useState(false)
  const moviesStyle = `main-header__link ${useMatch('/movies') && 'main-header__link_active'}`
  const savedStyle = `main-header__link ${useMatch('/saved-movies') && 'main-header__link_active'}`

  return (
    <Media query={{ maxWidth: 768 }}>
      {matches =>
        matches ? (
          <header className="main-header">
            <Link className='header__logo' to='/'>
              <img src={logoC} alt='логотип "С"' />
            </Link>
            <button 
            className="main-header__menuButton"
            onClick={() => setOpen(!open)}
            ></button>
          </header>
        ) : (
          <header className="main-header">
            <Link className='header__logo' to='/'>
              <img src={logoC} alt='логотип "С"' />
            </Link>
            <nav className="main-header__nav">
              <Link className={moviesStyle} to='/movies'>
                Фильмы
              </Link>
              <Link className={savedStyle} to='/saved-movies'>
                Сохранённые фильмы
              </Link>
            </nav>
            <Link className="main-header__button-container" to='/profile'>
              <button className="main-header__button" type="button">
                Аккаунт
              </button>
            </Link>
          </header>
        )
      }
    </Media>

  )
}

export default MainHeader;