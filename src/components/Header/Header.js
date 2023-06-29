import React from 'react';
import logoC from '../../images/logo-c.svg'

function Header() {
  return (
    <header className='header'>
      <a className='header__logo' href='#'><img src={logoC} alt='логотип "С"' /></a>
      <a className='header__link' href='#'>Регистрация</a>
      <button className='header__button' type='button'>Войти</button>
    </header>
  )
}

export default Header;