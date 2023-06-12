import "./NotFound.css";
import {useNavigate} from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function handleBackButtonClick() {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <span className="not-found__subtitle">Страница не найдена</span>
        <button className="not-found__return-button" type="button" onClick={handleBackButtonClick}>Назад</button>
      </div>
    </section>
  );
}

export default NotFound;