import { React } from "react";
import logoC from '../../images/logo-c.svg';
import { Link, NavLink, useMatch } from 'react-router-dom';
import Media from "react-media";
import { headerBreakpoint } from '../../utils/constants'

function Header({ handleMenuClick }) {
  const landingPage = useMatch('/')
  const headerStyle = `header ${landingPage && 'header-main'}`
  const menuButtonStyle = `header__menuButton ${landingPage && 'header__menuButton-blue'}`

  function navLinkStyle(isActive) {
    return `header__link ${isActive ? 'header__link_active'
      : landingPage ? 'header__link_white' : ''}`
  }

  return (
    <Media query={{ maxWidth: headerBreakpoint }}>
      {matches => !matches ? (
        <header className={headerStyle}>
          <Link
            to='/'
            className='header__logo'>
            <img src={logoC} alt='логотип "С"' />
          </Link>
          <nav className="header__nav">
            <NavLink
              to='/movies'
              className={({ isActive }) => navLinkStyle(isActive)}>
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) => navLinkStyle(isActive)}>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink
            to='/profile'
            className="header__button-container">
            <button
              className="header__button"
              type="button">
              Аккаунт
            </button>
          </NavLink>
        </header>
      ) : (
        <header className={headerStyle}>
          <Link
            to='/'
            className='header__logo'>
            <img src={logoC} alt='логотип "С"' />
          </Link>
          <button
            className={menuButtonStyle}
            onClick={handleMenuClick}>
          </button>
        </header>
      )
      }
    </Media>
  )
}

export default Header;