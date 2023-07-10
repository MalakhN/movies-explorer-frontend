import { Link, useLocation } from "react-router-dom";
import "./HeaderNav.css";

function HeaderNav() {
  const { pathname } = useLocation();

  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        <li><Link to="/movies"className={`header__navigation-link ${pathname === "/movies" ? "header__navigation-link_active" : "" }`}>Фильмы</Link></li>
        <li><Link to="/saved-movies" className={`header__navigation-link ${pathname === "/saved-movies" ? "header__navigation-link_active" : "" }`}>Сохранённые фильмы</Link></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;