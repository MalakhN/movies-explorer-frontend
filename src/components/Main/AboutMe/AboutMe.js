import "./AboutMe.css";
import Photo from "../../../images/Photo.jpg"
import HeadingTitle from "../HeadingTitle/HeadingTitle";

function AboutMe() {
  return (
    <section className="student" id="student">
      <div className="student__title">
        <HeadingTitle title="Студент"/>
      </div>
      <div className="student__info">
        <div className="student__info-text">
          <h3 className="student__name">Наталья</h3>
          <p className="student__status">Фронтенд-разработчик, 33&nbsp;года</p>
          <p className="student__description">Родилась и&nbsp;выросла в&nbsp;Красноярске, сейчас живу в&nbsp;Москве.
          Закончила СФУ как &laquo;Специалист по&nbsp;рекламе&raquo; и&nbsp;7&nbsp;лет работала Интернет-маркетологом, где познакомилась с&nbsp;HTML и&nbsp;CSS.
          Прохожу курс &laquo;Веб-разработчик&raquo; в&nbsp;Яндекс.Практикум и&nbsp;хочу создавать удобные и&nbsp;красивые сайты.
           </p>
        </div>
        <ul className="student__info-links">
          <li className="student__info-item">
            <a href="https://github.com/MalakhN" className="student__info-link" target="_blank">Github</a>
          </li>
        </ul>
        <img className="student__photo" src={Photo} alt="Фото" />
      </div>
    </section>
  );
}

export default AboutMe;