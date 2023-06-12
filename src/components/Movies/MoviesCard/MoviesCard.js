import React from 'react';
import "./MoviesCard.css";

function MoviesCard({ movie, children }) {
  return (
    <article className="movies-card">
      <div className="movies-card__title-container">
        <span className="movies-card__name">{movie.nameRU}</span>
        <span className="movies-card__duration">{movie.duration} минут</span>
      </div>
      <img className="movies-card__cover" src={movie.thumbnail} alt={movie.nameRU}/>
      {children}
    </article>
  );
}

export default MoviesCard;
