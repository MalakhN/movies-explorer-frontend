import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import "./Profile.css";
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import ProfileForm from "../Profile/ProfileForm/ProfileForm";

function Profile(props) {
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
            <ProfileForm onUpdateProfile={props.onUpdateProfile} />
            <Link to="/signin" className="profile__exit-button" onClick={props.onSignOut}>
              Выйти из аккаунта
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;