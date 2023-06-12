import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ children }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link"><img className="header__logo" alt="Логотип" src={logo}/></Link>
        { children }
    </header>
  );
}

export default Header;