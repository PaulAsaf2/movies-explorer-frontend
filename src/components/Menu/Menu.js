import { React } from "react";
import { Link, NavLink } from "react-router-dom";

function Menu({ isOpened, handleMenuClick }) {
  const menuStyle = `menu ${isOpened ? 'menu_opened' : ''}`
  const menuContainerStyle = `menu__container ${isOpened && 'menu__container_opened'}`

  function menuLinkStyle(isActive) {
    return `menu__link ${isActive && 'menu__link_active'}`
  }

  return (
    <div className={menuStyle}>
      <div className={menuContainerStyle}>
        <button
          type="button"
          className="menu__button"
          onClick={handleMenuClick}
        ></button>
        <nav className="menu__nav">
          <NavLink
            to='/'
            className={({ isActive }) => menuLinkStyle(isActive)}
            onClick={handleMenuClick}>
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) => menuLinkStyle(isActive)}
            onClick={handleMenuClick}>
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) => menuLinkStyle(isActive)}
            onClick={handleMenuClick}>
            Сохранённые фильмы
          </NavLink>
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