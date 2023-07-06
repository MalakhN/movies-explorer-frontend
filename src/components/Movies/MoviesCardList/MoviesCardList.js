import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ movies, onToggleLike, savedMovies, onRemoveMovie }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__elements">
        {movies.map((item) => {
          return (
            <MoviesCard
              onToggleLike={onToggleLike}
              savedMovies={savedMovies}
              onRemoveMovie={onRemoveMovie}
              movie={item}
              key={item.id || item.movieId}
            />
          );
        })}
      </ul>
    </section>
  )
}

export default MoviesCardList;
