import "./SignHeader.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function SignHeader({ text }) {
  return (
    <div className="sign-header">
      <Link to="/" className="header__logo-link"><img className="header__logo" alt="Логотип" src={logo}/></Link>
      <h1 className="sign-header__title">{text}</h1>
    </div>
  )
}

export default SignHeader;