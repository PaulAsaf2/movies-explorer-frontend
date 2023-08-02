import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoC from '../../images/logo-c.svg';
import useFormAndValidation from "../hooks/useFormAndValidation";

function Login({ onLogin, attentionMessage, loggedIn }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies', { replace: true });
    }
  }, [])

  const emailError = `auth__input ${errors.email && 'auth__input_error'}`
  const passError = `auth__input ${errors.password && 'auth__input_error'}`
  const submitError = `auth__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { email, password } = values
    onLogin(email, password)
  }

  return (
    <main className="auth">
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
        onSubmit={handleSubmit} >
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
          className={emailError}
          onInput={handleChange}
          onChange={handleSubmitButton}
          value={values.email || ''} />
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
          autoComplete="off"
          type="password"
          id="password"
          name="password"
          minLength="2"
          maxLength="40"
          placeholder="*********"
          className={passError}
          onInput={handleChange}
          onChange={handleSubmitButton}
          value={values.password || ''} />
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
            type="submit"
            onClick={handleSubmit}
            className={submitError}>
            Войти
          </button>
        </div>
      </form>
      <div className="auth__container">
        <p className="auth__text">Ещё не зарегистрированы?</p>
        <Link
          to='/signup'
          className="auth__link">
          Регистрация
        </Link>
      </div>
    </main>
  )
}

export default Login