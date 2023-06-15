import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__content">
        <span className="footer__copyright">&copy; 2023</span>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__navigation-link">Яндекс.Практикум</a>
          <a href="https://github.com/MalakhN" target="_blank" className="footer__navigation-link">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
