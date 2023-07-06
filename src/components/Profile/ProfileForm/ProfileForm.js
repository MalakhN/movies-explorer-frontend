import "./ProfileForm.css";
import React from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import { validateEmail, validateName } from "../../../utils/validators";

function ProfileForm({onUpdateProfile, serverError, isOkRequest}) {
  const { values, handleChange, setValues } = useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [showSuccessText, setShowSuccessText] = React.useState(false);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(values);
    setShowSuccessText(true);
  };

  return (
    <section className="profile-form">
      <form className="profile-form__form" noValidate onSubmit={handleSubmit}>
        <div className="profile-form__inputs-container">
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__input-label" htmlFor="name">Имя</label>
            <input
              className="profile-form__input"
              value={values.name || ""}
              onChange={handleChange}
              id="name"
              type="name"
              name="name"
              required
              minLength="2"
              maxLength="70"
              autoComplete="off"
            />
          </fieldset>
          <span className={`profile__input-error-message profile__input-error-message_active`}>
            {validateName(values.name).error}
          </span>
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__input-label" htmlFor="email">E-mail</label>
            <input
              className="profile-form__input"
              value={values.email || ""}
              onChange={handleChange}
              id="email"
              type="email"
              name="email"
              required
              minLength="2"
              maxLength="40"
              autoComplete="off"
            />
          </fieldset>
          <span className={`profile__input-error-message profile__input-error-message_active`}>
            {validateEmail(values.email).error}
          </span>
        </div>
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
        <button
          className={`profile-form__submit-button ${
            (values.name === currentUser.name && values.email === currentUser.email) ||
            !validateName(values.name).activeButton || !validateEmail(values.email).activeButton
              ? "profile-form__submit-button_disabled"
              : ""
          }`}
          type="submit">
            Редактировать
        </button>
      </form>
    </section>
  );
}

export default ProfileForm;
