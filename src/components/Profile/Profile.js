import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import "./Profile.css";
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import ProfileForm from "../Profile/ProfileForm/ProfileForm";

function Profile({ onSignOut, onUpdateProfile }) {
  const { values, setValues } = useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(values);
  };

  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <main className="main-content">
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <ProfileForm onSubmit={handleSubmit} />
            <Link to="/signin" className="profile__exit-button" onClick={onSignOut}>
              Выйти из аккаунта
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;