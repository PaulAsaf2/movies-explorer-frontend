import React from "react";
import logoC from '../../../images/logo-c.svg';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header className="main-header">
      <Link
        className='header__logo'
        to='/'
      ><img
          src={logoC}
          alt='логотип "С"' />
      </Link>
      <nav className="main-header__nav">
        <Link
          className="main-header__link"
          to='/movies'
        >
          Фильмы
        </Link>
        <Link
          className="main-header__link"
          to='/saved-movies'
        >
          Сохранённые фильмы
        </Link>
      </nav>
      <Link
        className="main-header__button-container"
        to='/profile'
      >
        <button
          className="main-header__button"
          type="button"
        >
          Аккаунт
        </button>
      </Link>
    </header>
  )
}

export default MainHeader;