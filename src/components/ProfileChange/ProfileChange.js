/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useContext, useEffect } from "react";
import Header from '../Header/Header'
import useFormAndValidation from "../hooks/useFormAndValidation";
import { CurrentUser } from "../../contexts/context";

function ProfileChange({ handleMenuClick, onUpdateUser, attentionMessage }) {
  const user = useContext(CurrentUser)
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);
  const [userData, setUserData] = useState({ name: user.name, email: user.email });

  const nameStyle = `profile-change__input ${errors.name && 'auth__input_error'}`
  const emailStyle = `profile-change__input ${errors.email && 'auth__input_error'}`
  const submitStyle = `profile-change__submit ${(!isValid || !submitButton) && 'auth__submit_disabled'}`

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser(values)
  }

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email
    })
  }, [])

  useEffect(() => {
    const inputValuesString = JSON.stringify(values)
    const userValuesString = JSON.stringify(userData)

    if (inputValuesString === userValuesString) {
      setIsValid(false)
    }
  }, [values, userData])

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
            autoComplete="off"
            dir="rtl"
            type="text"
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            className={nameStyle}
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
            autoComplete="off"
            dir="rtl"
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className={emailStyle}
            onInput={handleChange}
            onChange={handleSubmitButton}
            value={values.email || ''} />
          <span
            className="auth__span">
            {!isValid && errors.email}
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
              Сохранить
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ProfileChange;