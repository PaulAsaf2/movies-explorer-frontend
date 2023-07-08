import React from 'react';
import logoC from '../../../images/logo-c.svg'
import { Link } from 'react-router-dom';

function LandingHeader() {
  return (
    <header className='landing-header'>
      <Link className='landing-header__logo' to='/'><img src={logoC} alt='логотип "С"' /></Link>
      <a className='landing-header__link' href='#'>Регистрация</a>
      <button className='landing-header__button' type='button'>Войти</button>
    </header>
  )
}

export default LandingHeader;