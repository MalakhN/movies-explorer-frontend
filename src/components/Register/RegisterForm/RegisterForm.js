import React from "react";
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { validateEmail, validateName } from '../../../utils/validators';
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";

function RegisterForm(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (props.loggedIn) {
      navigate('/movies');
    }
  }, [props.loggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(values);
  };

  return (
    <Form
      submitButtonText="Зарегистрироваться"
      onSubmit={handleSubmit}
    >
      <Input
        value={values.name || ''}
        onChange={handleChange}
        id="name"
        type="name"
        name="name"
        label="Имя"
        required
        minLength="2"
        maxLength="70"
        autoComplete="off"
      />
      <span className={`sign__input-error-message ${isValid ? '' : 'sign__input-error-message_active'}`}>
        {validateName(values.name).error}
      </span>
      <Input
        value={email}
        onChange={handleChange}
        id="email"
        type="email"
        name="email"
        label="E-mail"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <span className={`sign__input-error-message ${isValid ? '' : 'sign__input-error-message_active'}`}>
        {validateEmail(values.email).error}
      </span>
      <Input
        value={password}
        onChange={handleChange}
        id="password"
        type="password"
        name="password"
        label="Пароль"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <span className={`sign__input-error ${isValid ? '' : 'sign__input-error_active'}`}>
        {errors.password}
      </span>
    </Form>
  )
}

export default RegisterForm;