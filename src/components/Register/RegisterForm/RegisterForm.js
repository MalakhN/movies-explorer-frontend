import React from "react";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import { validateEmail, validateName } from "../../../utils/validators";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import "./RegisterForm.css";

function RegisterForm(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(values);
  };

  return (
    <Form
      submitButtonText="Зарегистрироваться"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <Input
        value={values.name || ""}
        onChange={handleChange}
        id="name"
        type="name"
        name="name"
        label="Имя"
        required
        minLength="2"
        maxLength="70"
        autoComplete="off"
        errorText={validateName(values.name).error}
      />
      <Input
        value={values.email || ""}
        onChange={handleChange}
        id="email"
        type="email"
        name="email"
        label="E-mail"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
        errorText={validateEmail(values.email).error}
      />
      <Input
        value={values.password || ""}
        onChange={handleChange}
        id="password"
        type="password"
        name="password"
        label="Пароль"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
        errorText={errors.password}
      />
    </Form>
  )
}

export default RegisterForm;