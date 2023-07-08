import { React, useState } from "react";
import { Link, useMatch } from "react-router-dom";

function Menu({ handleMenuClick, isOpened }) {
  const moviesStyle = `menu__link ${useMatch('/movies') && 'menu__link_active'}`
  const savedStyle = `menu__link ${useMatch('/saved-movies') && 'menu__link_active'}`
  const menuStyle = `menu ${isOpened && 'menu_opened'}`

  return (
    <div className={menuStyle}>
      <div className="menu_container">
        <button
          type="button"
          className="menu__button"
          onClick={handleMenuClick}
        ></button>
        <nav className="menu__nav">
          <Link to='/' className='menu__link'>
            Главная
          </Link>
          <Link to='/movies' className={moviesStyle}>
            Фильмы
          </Link>
          <Link to='/saved-movies' className={savedStyle}>
            Сохранённые фильмы
          </Link>
        </nav>
        <Link to='/profile'>
          <button className="menu__buttonAccount" type="button">
            Аккаунт
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Menu