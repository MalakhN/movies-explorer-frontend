import React from "react";
import "./Movies.css"
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Header containerClassName="header__container-movies">
        <Navigation/>
      </Header>
      <SearchForm />
      <MoviesCardList />
      <div className="movies__more-button-container">
          <button className="movies__more-button" type="button">Ещё</button>
      </div>
      <Footer/>
    </>
  );
}

export default Movies;