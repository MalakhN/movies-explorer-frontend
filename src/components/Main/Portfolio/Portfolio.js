import "./Portfolio.css";

function Portfolio() {
    return (
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links-list">
          <li className="portfolio__links-item">
            <a href="https://github.com/MalakhN/how-to-learn" className="portfolio__link" target="_blank">Статичный сайт</a>
          </li>
          <li className="portfolio__links-item">
            <a href="https://github.com/MalakhN/russian-travel" className="portfolio__link" target="_blank">Адаптивный сайт</a>
          </li>
          <li className="portfolio__links-item">
            <a href="https://github.com/MalakhN/react-mesto-api-full-gha" className="portfolio__link" target="_blank">Одностраничное приложение</a>
          </li>
        </ul>
      </section>
    );
  }

  export default Portfolio;