import React from "react";
import Header from '../Header/Header'
import userData from '../../utils/temporalData';

function ProfileChange({handleMenuClick}) {
  return (
    <div className="profile">
      <Header handleMenuClick={handleMenuClick} />
      <section className="profile__container">
        <h1 className="profile__title profile-change__title">Привет, {userData.name}</h1>
        <form className="profile-change__form">
          <input className="profile-change__input" type="text" placeholder="Имя"/>
          <div className="profile-change__line"></div>
          <input className="profile-change__input" type="email" placeholder="E-mail"/>
          <button className="profile-change__submit" type="submit">Сохранить</button>
        </form>
      </section>
    </div>
  )
}

export default ProfileChange;