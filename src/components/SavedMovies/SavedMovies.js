import React from "react";
import "./SavedMovies.css"
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation"
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header containerClassName="header__container-movies">
        <Navigation/>
      </Header>
      <SearchForm />
      <MoviesCardList />
      <div className="saved-movies__container"></div>
      <Footer/>
    </>
  );
}

export default SavedMovies;