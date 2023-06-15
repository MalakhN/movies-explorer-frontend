import { Link, useNavigate } from "react-router-dom";
import "./HeaderAcc.css";

function HeaderAcc() {
  const navigate = useNavigate();

  const handleUserInfo = () => {
    navigate("/profile", { replace: true });
  };

  return (
    <div className="header__account">
      <Link to="/profile" className="header__account-link">Аккаунт</Link>
      <button className="header__account-button" onClick={handleUserInfo}></button>
    </div>
  );
}

export default HeaderAcc;