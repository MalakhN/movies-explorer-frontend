import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavDrawer.css";
import HeaderAcc from "../../Header/HeaderAcc/HeaderAcc";

function NavDrawer({ onCloseDrawer }) {
  const { pathname } = useLocation();

  return (
    <div className="nav-drawer">
      <div className="nav-drawer__container">
        <div className="nav-drawer__close-button-container">
          <button type="button" className="nav-drawer__close-button" onClick={onCloseDrawer}/>
        </div>
        <div className="nav-drawer__navigation">
          <nav className="nav-drawer__links">
            <Link to="/" className={`nav-drawer__link ${pathname === "/" ? "nav-drawer__link_active" : "" }`}>Главная</Link>
            <Link to="/movies" className={`nav-drawer__link ${pathname === "/movies" ? "nav-drawer__link_active" : "" }`}>Фильмы</Link>
            <Link to="/saved-movies" className={`nav-drawer__link ${pathname === "/saved-movies" ? "nav-drawer__link_active" : "" }`}>Сохранённые фильмы</Link>
          </nav>
          <HeaderAcc/>
        </div>
      </div>
    </div>
  );
}

export default NavDrawer;