import "./NavTab.css";

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="promo-navigation">
        <ul className="promo-navigation__list">
          <li className="promo-navigation__item">
            <a href="#about-project" className="promo-navigation__link">О проекте</a>
          </li>
          <li className="promo-navigation__item">
            <a href="#techs" className="promo-navigation__link">Технологии</a>
          </li>
          <li className="promo-navigation__item">
            <a href="#student" className="promo-navigation__link">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;