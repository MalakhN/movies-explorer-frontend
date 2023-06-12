import "./ProfileForm.css";
import React from "react";

function ProfileForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      email,
    });
  }

  return (
    <section className="profile-form">
      <form className="profile-form__form" noValidate onSubmit={handleSubmit}>
        <div className="profile-form__inputs-container">
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__input-label" htmlFor="name">Имя</label>
            <input
              className="profile-form__input"
              value="Виталий"
              onChange={handleChangeName}
              id="name"
              type="text"
              name="email"
              required={true}
              minLength="2"
              maxLength="40"
              autoComplete="off"
            />
          </fieldset>
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__input-label" htmlFor="email">E-mail</label>
            <input
              className="profile-form__input"
              value="pochta@ya.ru"
              onChange={handleSetEmail}
              id="email"
              type="email"
              name="email"
              required={true}
              minLength="2"
              maxLength="40"
              autoComplete="off"
            />
          </fieldset>
        </div>
        <button className="profile-form__submit-button" type="submit">Редактировать</button>
      </form>
    </section>
  );
}

export default ProfileForm;
