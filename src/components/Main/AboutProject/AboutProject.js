import "./AboutProject.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__title">
        <HeadingTitle title="О проекте"/>
      </div>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__item-title">Дипломный проект включал 5&nbsp;этапов</h3>
          <p className="about-project__item-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__item-title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
          <p className="about-project__item-description">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__time-line">
        <p className="about-project__stage-time-backend">1 неделя</p>
        <p className="about-project__stage-time-frontend">4 недели</p>
        <p className="about-project__stage-backend">Back-end</p>
        <p className="about-project__stage-frontend">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;