import React from 'react';
import logoC from '../../../images/logo-c.svg'
import { Link } from 'react-router-dom';

function LandingHeader() {
  return (
    <header className='landing-header'>
      <Link
        to='/'
        className='landing-header__logo'>
        <img src={logoC} alt='логотип "С"' />
      </Link>
      <Link
        to='/signup'
        className='landing-header__link'>
        Регистрация
      </Link>
      <Link to='/signin'>
        <button
          className='landing-header__button'
          type='button'>
          Войти
        </button>
      </Link>
    </header>
  )
}

export default LandingHeader;