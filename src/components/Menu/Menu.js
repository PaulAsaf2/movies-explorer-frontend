import { React } from "react";
import { Link, useMatch } from "react-router-dom";

function Menu({ isOpened, handleMenuClick }) {
  const moviesStyle = `menu__link ${useMatch('/movies') && 'menu__link_active'}`
  const savedStyle = `menu__link ${useMatch('/saved-movies') && 'menu__link_active'}`
  const menuStyle = `menu ${isOpened ? 'menu_opened' : ''}`
  const menuContainerStyle = `menu__container ${isOpened && 'menu__container_opened'}`

  return (
    <div className={menuStyle}>
      <div className={menuContainerStyle}>
        <button
          type="button"
          className="menu__button"
          onClick={handleMenuClick}
        ></button>
        <nav className="menu__nav">
          <Link
            to='/'
            className='menu__link'
            onClick={handleMenuClick}>
            Главная
          </Link>
          <Link
            to='/movies'
            className={moviesStyle}
            onClick={handleMenuClick}>
            Фильмы
          </Link>
          <Link
            to='/saved-movies'
            className={savedStyle}
            onClick={handleMenuClick}>
            Сохранённые фильмы
          </Link>
        </nav>
        <Link to='/profile'>
          <button
            className="menu__buttonAccount"
            type="button"
            onClick={handleMenuClick}>
            Аккаунт
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Menu