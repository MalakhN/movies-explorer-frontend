import "./Profile.css";
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import ProfileForm from "../Profile/ProfileForm/ProfileForm";

function Profile() {
  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <main className="main-content">
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <ProfileForm/>
            <button className="profile__exit-button" type="button">Выйти из аккаута</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;