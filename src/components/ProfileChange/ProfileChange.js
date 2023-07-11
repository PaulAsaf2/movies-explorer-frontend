import { React, useState } from "react";
import Header from '../Header/Header'
import userData from '../../utils/temporalData';
import useFormAndValidation from "../hooks/useFormAndValidation";

function ProfileChange({ handleMenuClick }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);
  const [existingEmail, setExistingEmail] = useState(false);

  const nameError = `profile-change__input ${errors.name && 'auth__input_error'}`
  const emailError = `profile-change__input ${errors.email && 'auth__input_error'}`
  const submitError = `profile-change__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`
  const existingEmailError = 'Пользователь с таким e-mail уже существует'

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  return (
    <div className="profile">
      <Header handleMenuClick={handleMenuClick} />
      <section className="profile__container">
        <h1
          className="profile__title profile-change__title">
          Привет, {userData.name}
        </h1>
        <form
          name="profile"
          noValidate
          className="profile-change__form"
        >
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
            value={values.name || ''}
          />
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
            value={values.email || ''}
          />
          <span
            className="auth__span">
            {!isValid && errors.email}
            {existingEmail && existingEmailError}
          </span>
        </form>
        <button
          className={submitError}
          type="submit"
          onClick={() => setExistingEmail(true)}>
          Сохранить
        </button>
      </section>
    </div>
  )
}

export default ProfileChange;