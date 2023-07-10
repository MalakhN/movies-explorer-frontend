import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound({ loggedIn }) {
  const navigate = useNavigate();

  function handleBackButtonClick() {
    loggedIn ? navigate(-2) : navigate('/');
  }

  return (
    <main className="main-content">
      <section className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <span className="not-found__subtitle">Страница не найдена</span>
          <button className="not-found__return-button" type="button" onClick={handleBackButtonClick}>Назад</button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;



