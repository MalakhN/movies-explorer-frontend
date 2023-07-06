import { Link } from "react-router-dom";
import "./HeaderEntr.css";

function Header() {
  return (
    <div className="header__entrance">
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