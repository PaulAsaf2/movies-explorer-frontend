import { React, useState } from "react";
import { Link } from "react-router-dom";
import logoC from '../../images/logo-c.svg';
import useFormAndValidation from "../hooks/useFormAndValidation";

function Register() {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);
  const [existingEmail, setExistingEmail] = useState(false);

  const nameError = `auth__input ${errors.name && 'auth__input_error'}`
  const emailError = `auth__input ${errors.email && 'auth__input_error'}`
  const passError = `auth__input ${errors.password && 'auth__input_error'}`
  const submitError = `auth__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`
  const existingEmailError = 'Пользователь с таким e-mail уже существует'

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  return (
    <div className="auth">
      <Link to='/' className='header__logo'>
        <img src={logoC} alt='логотип "С"' />
      </Link>
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form
        name="register"
        noValidate
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
          placeholder="Виталий"
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
          {existingEmail && existingEmailError}
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
      <button
        className={submitError}
        type="submit"
        onClick={() => setExistingEmail(true)}>
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