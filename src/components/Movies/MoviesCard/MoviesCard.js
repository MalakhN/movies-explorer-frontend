import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./MoviesCard.css";

function MoviesCard({ movie, favoriteMovies, onToggleLike, onRemoveMovie }) {
  const { pathname } = useLocation();

  const likedMovie = favoriteMovies
    ? favoriteMovies.find((item) => item.movieId === movie.id)
    : '';

  const isLiked = favoriteMovies
    ? favoriteMovies.some((i) => i.movieId === movie.id)
    : false;

  const cardLikeButtonClassName = `movies-card__save-button ${
    isLiked ? 'movies-card__save-button_active' : ''
  }`;

  const handleLikeClick = () => {
    onToggleLike(movie, isLiked, likedMovie?._id);
  };

  const handleDeleteClick = () => {
    onRemoveMovie(movie._id);
  };

  return (
    <article className="movies-card">
      <div className="movies-card__title-container">
        <span className="movies-card__name">{movie.nameRU}</span>
        <span className="movies-card__duration">{movie.duration} минут</span>
      </div>
      <Link
        className="movies-card__trailer-link"
        to={movie.trailerLink}
        target="_blank">
        <img
          className="movies-card__cover"
          src={movie.image.url ? "https://api.nomoreparties.co" + movie.image.url : movie.image}
          alt={movie.nameRU}
        />
      </Link>
      {pathname === '/movies' && (
          <button
            onClick={handleLikeClick}
            type="button"
            className={cardLikeButtonClassName}
          />
        )}
        {pathname === '/saved-movies' && (
          <button
            onClick={handleDeleteClick}
            type="button"
            className="movies-card__delete-button"
          />
        )}
    </article>
  );
}

export default MoviesCard;
