import { React, useState } from "react";
import { Link } from "react-router-dom";
import logoC from '../../images/logo-c.svg';
import useFormAndValidation from "../hooks/useFormAndValidation";

function Register({ onRegister, attentionMessage, enter }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);

  const nameError = `auth__input ${errors.name && 'auth__input_error'}`
  const emailError = `auth__input ${errors.email && 'auth__input_error'}`
  const passError = `auth__input ${errors.password && 'auth__input_error'}`
  const submitError = `auth__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, password } = values
    onRegister(name, email, password)
  }

  return (
    <div className="auth">
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
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          className={nameError}
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
          type="email"
          id="email"
          name="email"
          placeholder="pochta@yandex.ru"
          className={emailError}
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
          className={passError}
          onInput={handleChange}
          onChange={handleSubmitButton}
          value={values.password || ''}
        />
        <span
          className="auth__span">
          {!isValid && errors.password}
        </span>
      </form>
      <p className="auth__error">
        {enter && attentionMessage}
      </p>
      <button
        className={submitError}
        type="submit"
        onClick={handleSubmit}>
        Зарегистрироваться
      </button>
      <div className="auth__container">
        <p className="auth__text">Уже зарегистрированы?</p>
        <Link
          to='/signin'
          className="auth__link">
          Войти
        </Link>
      </div>
    </div>
  )
}

export default Register