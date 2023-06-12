import React from "react";
import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";

function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    props.onLogin(email, password);
  };

  return (
    <Form
      submitButtonText="Войти"
      onSubmit={handleSubmit}
    >
      <Input
        value={email}
        onChange={handleInputEmail}
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
        onChange={handleInputPassword}
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