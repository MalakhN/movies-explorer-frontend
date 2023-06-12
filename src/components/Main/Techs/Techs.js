import "./Techs.css";

import HeadingTitle from "../HeadingTitle/HeadingTitle";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__title">
        <HeadingTitle title="Технологии"/>
      </div>
      <div className="techs__description">
        <h3 className="techs__description-title">7&nbsp;технологий</h3>
        <p className="techs__description-text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
      </div>
      <ul className="techs__list">
        <li className="techs__name">HTML</li>
        <li className="techs__name">CSS</li>
        <li className="techs__name">JS</li>
        <li className="techs__name">React</li>
        <li className="techs__name">Git</li>
        <li className="techs__name">Express.js</li>
        <li className="techs__name">MongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;