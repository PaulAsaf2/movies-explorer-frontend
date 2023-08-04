/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoC from '../../images/logo-c.svg';
import useFormAndValidation from "../hooks/useFormAndValidation";

function Register({ onRegister, attentionMessage, loggedIn }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies', { replace: true });
    }
  }, [])

  const nameStyle = `auth__input ${errors.name && 'auth__input_error'}`
  const emailStyle = `auth__input ${errors.email && 'auth__input_error'}`
  const passStyle = `auth__input ${errors.password && 'auth__input_error'}`
  const submitStyle = `auth__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, password } = values
    onRegister(name, email, password)
  }

  return (
    <main className="auth">
      <Link
        to='/'
        className='header__logo'>
        <img src={logoC} alt='логотип "С"' />
      </Link>
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form
        name="register"
        noValidate
        onSubmit={handleSubmit}
        className="auth__form"
      >
        <label
          className="auth__label"
          htmlFor="name">
          Имя
        </label>
        <input
          required
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          className={nameStyle}
          onInput={handleChange}
          onChange={handleSubmitButton}
          value={values.name || ''}
        />
        <span
          className="auth__span">
          {!isValid && errors.name}
        </span>
        <label
          className="auth__label"
          htmlFor="email">
          E-mail
        </label>
        <input
          required
          autoComplete="off"
          type="email"
          id="email"
          name="email"
          placeholder="pochta@yandex.ru"
          className={emailStyle}
          onInput={handleChange}
          onChange={handleSubmitButton}
          value={values.email || ''}
        />
        <span
          className="auth__span">
          {!isValid && errors.email}
        </span>
        <label
          className="auth__label"
          htmlFor="password">
          Пароль
        </label>
        <input
          required
          type="password"
          id="password"
          name="password"
          minLength="2"
          maxLength="40"
          placeholder="*********"
          className={passStyle}
          onInput={handleChange}
          onChange={handleSubmitButton}
          value={values.password || ''}
        />
        <span
          className="auth__span">
          {!isValid && errors.password}
        </span>
        <div className="profile__link-container">
          <div className="profile__succes-container">
            <p className="profile-change__error">
              {attentionMessage}
            </p>
          </div>
          <button
            className={submitStyle}
            type="submit"
            onClick={handleSubmit}>
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="auth__container">
        <p className="auth__text">Уже зарегистрированы?</p>
        <Link
          to='/signin'
          className="auth__link">
          Войти
        </Link>
      </div>
    </main >
  )
}

export default Register