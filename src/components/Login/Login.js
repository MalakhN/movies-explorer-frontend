import "./Login.css";
import SignHeader from "../SignHeader/SignHeader";
import LoginForm from "../Login/LoginForm/LoginForm";
import SignMessage from "../SignMessage/SignMessage";

function Login() {
  return (
    <>
      <section className="login">
        <div className="login__container">
          <SignHeader text="Рады видеть!" />
          <LoginForm/>
          <SignMessage questionText="Ещё не зарегистрированы?" linkPath="/sign-up" linkText="Регистрация"  />
        </div>
      </section>
    </>
  );
}

export default Login;