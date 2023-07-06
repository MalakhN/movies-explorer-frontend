import React from "react";
import "./SavedMovies.css"
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation"
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({ savedMovies, onRemoveMovie }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [notFoundError, setNotFoundError] = React.useState(false);
  const searchedMovies = localStorage.getItem("searchedMoviesSaved");
  const localInputVal = localStorage.getItem("inputValSaved");
  const localCheckbox = localStorage.getItem("checkboxStateSaved");

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
    if (localCheckbox) {
      setIsChecked(JSON.parse(localCheckbox));
    }
    if (localInputVal) {
      setInputText(JSON.parse(localInputVal));
      handleFilterMovies(JSON.parse(localInputVal), JSON.parse(localCheckbox));
    }
  }, [searchedMovies, localCheckbox, localInputVal]);

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [searchedMovies, savedMovies]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleCheckboxChange = () => {
    if (inputText !== "") {
      setIsChecked(!isChecked);
      handleFilterMovies(inputText, !isChecked);
    }
  };

  const handleFilterMovies = (inputValue, isCheckedState) => {
    localStorage.setItem("inputValSaved", JSON.stringify(inputValue));
    localStorage.setItem(
      "checkboxStateSaved",
      JSON.stringify(isCheckedState),
    );
    let newFilteredArray = [];
    if (isCheckedState) {
      newFilteredArray = savedMovies.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())) &&
          movie.duration <= 40
        );
      });
      setFilteredMovies(newFilteredArray);
      localStorage.setItem(
        "searchedMoviesSaved",
        JSON.stringify(newFilteredArray),
      );
    } else if (!isCheckedState) {
      newFilteredArray = savedMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      setFilteredMovies(newFilteredArray);
      localStorage.setItem(
        "searchedMoviesSaved",
        JSON.stringify(newFilteredArray),
      );
    }
    if (newFilteredArray.length === 0) {
      setNotFoundError(true);
    }
  };

  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <main className="main-content">
        <SearchForm
          checkboxChange={handleCheckboxChange}
          isChecked={isChecked}
          handleInputChange={handleSearchChange}
          inputValue={inputText}
          onFilter={handleFilterMovies}
        />
        {filteredMovies.length ? (
        <MoviesCardList movies={filteredMovies} onRemoveMovie={onRemoveMovie} />
        ) : (
          notFoundError && (
            <p className="movies__not-found">Ничего не найдено</p>
          )
        )}
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;