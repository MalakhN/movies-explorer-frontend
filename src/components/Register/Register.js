import "./Register.css";
import SignHeader from "../SignHeader/SignHeader";
import RegisterForm from "../Register/RegisterForm/RegisterForm";
import SignMessage from "../SignMessage/SignMessage";

function Register() {
  return (
    <>
      <section className="register">
        <div className="register__container">
          <SignHeader text="Добро пожаловать!" />
          <RegisterForm/>
          <SignMessage questionText="Уже зарегистрированы?" linkPath="/sign-in" linkText="Войти"  />
        </div>
      </section>
    </>
  );
}

export default Register;