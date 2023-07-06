import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import "./Profile.css";
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import ProfileForm from "../Profile/ProfileForm/ProfileForm";

function Profile({ onSignOut, onUpdateProfile, isOkRequest }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <main className="main-content">
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <ProfileForm onUpdateProfile={onUpdateProfile} />
            <Link to="/signin" className="profile__exit-button" onClick={onSignOut}>
              Выйти из аккаунта
            </Link>
            {isOkRequest ? (
            <span
              className={`profile__success-text ${
                showSuccessText ? '' : 'profile__success-text_disabled'
              }`}>
              Данные пользователя обновлены
            </span>
          ) : (
            <span
              className={`profile__error-text ${
                serverError ? '' : 'profile__error-text_disabled'
              }`}>
              Ошибка сервера
            </span>
          )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;