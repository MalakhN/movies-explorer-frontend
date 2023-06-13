import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo-link"><img className="logo-link__image" alt="Логотип" src={logo}/></Link>
  );
}

export default Logo;