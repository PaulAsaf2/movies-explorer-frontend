import { React } from "react";
import logoC from '../../images/logo-c.svg';
import { Link, useMatch } from 'react-router-dom';
import Media from "react-media";

function Header({ handleMenuClick }) {

  const moviesStyle = `header__link ${useMatch('/movies') && 'header__link_active'}`
  const savedStyle = `header__link ${useMatch('/saved-movies') && 'header__link_active'}`

  return (
    <Media query={{ maxWidth: 768 }}>
      {matches =>
        matches ? (
          <header className="header">
            <Link to='/' className='header__logo'>
              <img src={logoC} alt='логотип "С"' />
            </Link>
            <button
              className="header__menuButton"
              onClick={handleMenuClick}
            ></button>
          </header>
        ) : (
          <header className="header">
            <Link to='/' className='header__logo'>
              <img src={logoC} alt='логотип "С"' />
            </Link>
            <nav className="header__nav">
              <Link to='/movies' className={moviesStyle}>
                Фильмы
              </Link>
              <Link to='/saved-movies' className={savedStyle}>
                Сохранённые фильмы
              </Link>
            </nav>
            <Link to='/profile' className="header__button-container">
              <button className="header__button" type="button">
                Аккаунт
              </button>
            </Link>
          </header>
        )
      }
    </Media>
  )
}

export default Header;