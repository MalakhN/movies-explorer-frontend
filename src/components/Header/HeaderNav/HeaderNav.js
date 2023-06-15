import { Link } from "react-router-dom";
import "./HeaderNav.css";

function HeaderNav() {
  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        <li><Link to="/movies"className="header__navigation-link" >Фильмы</Link></li>
        <li><Link to="/saved-movies" className="header__navigation-link">Сохранённые фильмы</Link></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;