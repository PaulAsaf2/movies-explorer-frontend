import { React, useContext } from "react";
import { Link } from "react-router-dom";
import Header from '../Header/Header'
import { CurrentUser } from "../../contexts/context";

function Profile({ handleMenuClick, attentionMessage, onSignout }) {
  const user = useContext(CurrentUser)

  return (
    <div className="profile">
      <Header handleMenuClick={handleMenuClick} />
      <main className="profile__container">
        <h1 className="profile__title">Привет, {user.name}</h1>
        <div className="profile__user-container">
          <p className="profile__text">Имя</p>
          <p className="profile__text">{user.name}</p>
        </div>
        <div className="profile__line"></div>
        <div className="profile__user-container">
          <p className="profile__text">E-mail</p>
          <p className="profile__text">{user.email}</p>
        </div>
        <div className="profile__link-container">
          <div className="profile__succes-container">
            <p className="profile__succes">
              {attentionMessage}
            </p>
          </div>
          <Link
            to='/profile-change'
            className="profile__link">
            Редактировать
          </Link>
          <Link
            to='/'
            className="profile__link"
            onClick={() => onSignout()}>
            Выйти из аккаунта
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Profile;