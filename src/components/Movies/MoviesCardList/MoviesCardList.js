import React from "react";
import { moviesArray } from "../../../utils/moviesArray";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

import MovieSaveButton from "../MoviesCard/MovieSaveButton/MovieSaveButton"

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__elements">
        {moviesArray.map((element) => {
          return <MoviesCard movie={element} key={element.movieId}>
            <MovieSaveButton movie={element}/>
          </MoviesCard>;
        })}
      </ul>
    </section>
  )
}

export default MoviesCardList;
