import { React, useState, useContext } from "react";
import Header from '../Header/Header'
import useFormAndValidation from "../hooks/useFormAndValidation";
import { CurrentUser } from "../../contexts/moviesContext";

function ProfileChange({ handleMenuClick, onUpdateUser }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);
  const user = useContext(CurrentUser)

  const nameError = `profile-change__input ${errors.name && 'auth__input_error'}`
  const emailError = `profile-change__input ${errors.email && 'auth__input_error'}`
  const submitError = `profile-change__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser(values)
  }

  return (
    <div className="profile">
      <Header handleMenuClick={handleMenuClick} />
      <main className="profile__container">
        <h1
          className="profile__title profile-change__title">
          Привет, {user.name}
        </h1>
        <form
          name="profile"
          noValidate
          onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            className={nameError}
            onInput={handleChange}
            onChange={handleSubmitButton}
            value={values.name || ''} />
          <span
            className="auth__span">
            {!isValid && errors.name}
          </span>
          <div className="profile-change__line"></div>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className={emailError}
            onInput={handleChange}
            onChange={handleSubmitButton}
            value={values.email || ''} />
          <span
            className="auth__span">
            {!isValid && errors.email}
          </span>
        </form>
        <button
          className={submitError}
          type="submit"
          onClick={handleSubmit}>
          Сохранить
        </button>
      </main>
    </div>
  )
}

export default ProfileChange;