import Form from "../../Form/Form";
import Input from "../../Form/Input/Input";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";
import { validateEmail } from "../../../utils/validators";

function LoginForm(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    props.onLogin(values);
  };

  return (
    <Form
      submitButtonText="Войти"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <Input
        value={values.email || ""}
        onChange={handleChange}
        id="email"
        type="email"
        name="email"
        label="E-mail"
        required
        minLength="2"
        maxLength="70"
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

export default LoginForm;