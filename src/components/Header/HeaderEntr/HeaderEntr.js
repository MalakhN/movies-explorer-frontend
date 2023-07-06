import { Link } from 'react-router-dom';
import "./HeaderEntr.css";

function Header() {
  return (
    <div className="header__entrance">
      <button className="header__entrance-button header__entrance-button_reverse" onClick={handleRegistration}>Регистрация</button>
      <button className="header__entrance-button" onClick={handleLogIn}>Вход</button>
      <Link to="/signup" className="header__entrance-button header__entrance-button_reverse">
        Регистрация
      </Link>
      <Link to="/signin" className="header__entrance-button">
        Войти
      </Link>
    </div>
  );
}

export default Header;