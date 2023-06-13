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
      <Header>
        <Navigation/>
      </Header>
      <main className="main-content">
        <SearchForm />
        <MoviesCardList />
        <div className="saved-movies__container"></div>
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;