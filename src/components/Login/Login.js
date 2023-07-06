import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import SignHeader from "../SignHeader/SignHeader";
import LoginForm from "../Login/LoginForm/LoginForm";
import SignMessage from "../SignMessage/SignMessage";

function Login(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (props.loggedIn) {
      navigate("/movies");
    }
  }, [props.loggedIn, navigate]);

  return (
    <>
      <main className="main-content">
        <section className="login">
          <div className="login__container">
            <SignHeader text="Рады видеть!" />
            <LoginForm onLogin={props.onLogin}/>
            <SignMessage questionText="Ещё не зарегистрированы?" linkPath="/signup" linkText="Регистрация"  />
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;