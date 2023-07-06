import React from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import SignHeader from "../SignHeader/SignHeader";
import RegisterForm from "../Register/RegisterForm/RegisterForm";
import SignMessage from "../SignMessage/SignMessage";

function Register(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (props.loggedIn) {
      navigate('/movies');
    }
  }, [props.loggedIn, navigate]);

  return (
    <>
      <main className="main-content">
        <section className="register">
          <div className="register__container">
            <SignHeader text="Добро пожаловать!" />
            <RegisterForm onRegister={props.onRegister} />
            <SignMessage questionText="Уже зарегистрированы?" linkPath="/signin" linkText="Войти"  />
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;