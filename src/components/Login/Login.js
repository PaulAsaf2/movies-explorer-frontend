import React from "react";
import { Link } from "react-router-dom";
import logoC from '../../images/logo-c.svg';

function Login() {
  return (
    <div className="auth">
      <Link to='/' className='header__logo'>
        <img src={logoC} alt='логотип "С"' />
      </Link>
      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form">
        <label className="auth__label" htmlFor="email">E-mail</label>
        <input className="auth__input" type="email" id="email" placeholder="pochta@yandex.ru" />
        <span className="auth__span">Что-то пошло не так...</span>
        <label className="auth__label" htmlFor="password">Пароль</label>
        <input className="auth__input" type="password" id="password" placeholder="*********" />
        <span className="auth__span">Что-то пошло не так...</span>
      </form>
      <button className="auth__submit login__submit" type="submit">Войти</button>
      <div className="auth__container">
        <p className="auth__text">Ещё не зарегистрированы?</p>
        <Link to='/signup' className="auth__link">Регистрация</Link>
      </div>
    </div>
  )
}

export default Login