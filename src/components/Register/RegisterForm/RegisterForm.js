import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";

function LoginForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(email, password);
  };

  return (
    <Form
      submitButtonText="Зарегистрироваться"
      onSubmit={handleSubmit}
    >
      <Input
        value={name}
        onChange={handleChangeName}
        id="name"
        type="text"
        name="email"
        label="Имя"
        required={true}
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <Input
        value={email}
        onChange={handleSetEmail}
        id="email"
        type="email"
        name="email"
        label="E-mail"
        required={true}
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <Input
        value={password}
        onChange={handleSetPassword}
        id="password"
        type="password"
        name="password"
        label="Пароль"
        required={true}
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
    </Form>
  )
}

export default LoginForm;