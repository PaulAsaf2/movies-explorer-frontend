import React from 'react';
import logoC from '../../../images/logo-c.svg'
import { Link } from 'react-router-dom';

function LandingHeader() {
  return (
    <header className='header'>
      <Link className='header__logo' to='/'><img src={logoC} alt='логотип "С"' /></Link>
      <a className='header__link' href='#'>Регистрация</a>
      <button className='header__button' type='button'>Войти</button>
    </header>
  )
}

export default LandingHeader;