import { React, useState } from "react";
import { Link } from "react-router-dom";
import logoC from '../../images/logo-c.svg';
import useFormAndValidation from "../hooks/useFormAndValidation";

function Login() {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);
  const [incorrectDataTrue, setIncorrectDataTrue] = useState(false);

  const emailError = `auth__input ${errors.email && 'auth__input_error'}`
  const passError = `auth__input ${errors.password && 'auth__input_error'}`
  const submitError = `auth__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`
  const incorrectData = 'Неверная почта или пароль'

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  return (
    <div className="auth">
      <Link
        to='/'
        className='header__logo'>
        <img src={logoC} alt='логотип "С"' />
      </Link>
      <h1 className="auth__title">Рады видеть!</h1>
      <form
        name="login"
        noValidate
        className="auth__form"
      >
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
          {incorrectDataTrue && incorrectData}
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
          {incorrectDataTrue && incorrectData}
        </span>
      </form>
      <button
        className={submitError}
        type="submit"
        onClick={() => setIncorrectDataTrue(true)}>
        Войти
      </button>
      <div className="auth__container">
        <p className="auth__text">Ещё не зарегистрированы?</p>
        <Link
          to='/signup'
          className="auth__link">
          Регистрация
        </Link>
      </div>
    </div>
  )
}

export default Login