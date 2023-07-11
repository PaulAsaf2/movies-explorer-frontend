import React from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header'
import userData from '../../utils/temporalData';

function Profile({ handleMenuClick }) {
  return (
    <div className="profile">
      <Header handleMenuClick={handleMenuClick} />
      <section className="profile__container">
        <h1 className="profile__title">Привет, {userData.name}</h1>
        <div className="profile__user-container">
          <p className="profile__text">Имя</p>
          <p className="profile__text">{userData.name}</p>
        </div>
        <div className="profile__line"></div>
        <div className="profile__user-container">
          <p className="profile__text">E-mail</p>
          <p className="profile__text">{userData.email}</p>
        </div>
        <Link
          to='/profile-change'
          className="profile__link">
          Редактировать
        </Link>
        <Link
          to='/'
          className="profile__link">
          Выйти из аккаунта
        </Link>
      </section>
    </div>
  )
}

export default Profile;