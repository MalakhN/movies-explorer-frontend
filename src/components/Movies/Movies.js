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
      <Header>
        <Navigation/>
      </Header>
      <main className="main-content">
        <SearchForm />
        <MoviesCardList />
        <div className="more-movies">
            <button className="more-movies__button" type="button">Ещё</button>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;