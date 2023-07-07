import {React} from "react";
import { Link, useMatch } from "react-router-dom";

function Menu() {
  const moviesStyle = `menu__link ${useMatch('/movies') && 'main-header__link_active'}`
  const savedStyle = `menu__link ${useMatch('/saved-movies') && 'main-header__link_active'}`

  return (
    <div className="menu menu_opened">
      <div className="menu_container">
        <button type="button" className="menu__button"></button>
        <nav className="menu__nav">
          <Link className={moviesStyle} to='/'>
            Главная
          </Link>
          <Link className={moviesStyle} to='/movies'>
            Фильмы
          </Link>
          <Link className={savedStyle} to='/saved-movies'>
            Сохранённые фильмы
          </Link>
        </nav>
        <Link to='/profile'>
          <button className="menu__buttonAccaunt" type="button">
            Аккаунт
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Menu