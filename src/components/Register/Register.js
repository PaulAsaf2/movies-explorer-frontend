import React from "react";
import { Link } from "react-router-dom";
import logoC from '../../images/logo-c.svg';

function Register() {
  return (
    <div className="auth">
      <Link to='/' className='header__logo'>
        <img src={logoC} alt='логотип "С"' />
      </Link>
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form className="auth__form">
        <label className="auth__label" htmlFor="name">Имя</label>
        <input className="auth__input" type="text" id="name" placeholder="Виталий" />
        <span className="auth__span">Что-то пошло не так...</span>
        <label className="auth__label" htmlFor="email">E-mail</label>
        <input className="auth__input" type="email" id="email" placeholder="pochta@yandex.ru" />
        <span className="auth__span">Что-то пошло не так...</span>
        <label className="auth__label" htmlFor="password">Пароль</label>
        <input className="auth__input" type="password" id="password" placeholder="*********" />
        <span className="auth__span">Что-то пошло не так...</span>
      </form>
      <button className="auth__submit" type="submit">Зарегистрироваться</button>
      <div className="auth__container">
        <p className="auth__text">Уже зарегистрированы?</p>
        <Link to='/signin' className="auth__link">Войти</Link>
      </div>
    </div>
  )
}

export default Register