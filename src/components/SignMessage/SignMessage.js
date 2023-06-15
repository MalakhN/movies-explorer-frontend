import "./SignMessage.css";
import { Link } from "react-router-dom";

function SignMessage({ questionText, linkPath, linkText }) {
  return (
    <div className="sign-message">
      <span className="sign-message__title">{questionText}</span>
      <Link to={linkPath} className="sign-message__link">{linkText}</Link>
    </div>
  );
}

export default SignMessage;