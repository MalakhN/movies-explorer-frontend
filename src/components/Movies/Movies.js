import React from "react";
import "./Movies.css"
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation"
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader"
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies, moviesError, savedMovies, onToggleLike }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  const [notFoundError, setNotFoundError] = React.useState(false);
  const [showApiError, setShowApiError] = React.useState(false);
  const [nextMovies, setNextMovies] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const searchedMovies = localStorage.getItem("searchedMovies");
  const localInputVal = localStorage.getItem("inputVal");
  const localCheckbox = localStorage.getItem("checkboxState");

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
    if (localCheckbox) {
      setIsChecked(JSON.parse(localCheckbox));
    }
    if (localInputVal) {
      setInputText(JSON.parse(localInputVal));
    }
  }, [searchedMovies, localCheckbox, localInputVal]);

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
    localStorage.setItem("inputVal", JSON.stringify(inputValue));
    localStorage.setItem("checkboxState", JSON.stringify(isCheckedState));
    setNotFoundError(false);
    setIsLoading(true);
    setTimeout(() => {
      let newFilteredArray = [];
      if (isCheckedState) {
        newFilteredArray = movies.filter((movie) => {
          return (
            (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())) &&
            movie.duration <= 40
          );
        });
        setFilteredMovies(newFilteredArray);
        localStorage.setItem(
          "searchedMovies",
          JSON.stringify(newFilteredArray),
        );
      } else if (!isCheckedState) {
        newFilteredArray = movies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
          );
        });
        setFilteredMovies(newFilteredArray);
        localStorage.setItem(
          "searchedMovies",
          JSON.stringify(newFilteredArray),
        );
      }
      if (moviesError) {
        setShowApiError(true);
      } else if (!moviesError) {
        setShowApiError(false);
      }
      if (newFilteredArray.length === 0) {
        setNotFoundError(true);
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleResize = React.useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const renderMovies = React.useMemo(() => {
    const cardsCounter = screenWidth < 768 ? 5 : screenWidth < 1280 ? 8 : 12;
    return filteredMovies.slice(0, cardsCounter + nextMovies);
  }, [nextMovies, screenWidth, filteredMovies]);

  const handleClickButtonMore = () => {
    if (screenWidth < 1280) {
      setNextMovies((prev) => prev + 2);
    } else if (screenWidth >= 1280) {
      setNextMovies((prev) => prev + 3);
    }
  };

  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <main className="main-content">
        <SearchForm
          onFilter={handleFilterMovies}
          checkboxChange={handleCheckboxChange}
          isChecked={isChecked}
          handleInputChange={handleSearchChange}
          inputValue={inputText}
        />
        {showApiError ? (
          <p className="movies__error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        ) : isLoading ? (
          <Preloader />
        ) : notFoundError ? (
          <p className="movies__not-found">Ничего не найдено</p>
        ) : (
          <MoviesCardList
            movies={renderMovies}
            savedMovies={savedMovies}
            onToggleLike={onToggleLike}
            moviesError={moviesError}
          />
        )}
        <div className="more-movies">
          {filteredMovies.length > renderMovies.length ? (
            <button
              onClick={handleClickButtonMore}
              className="more-movies__button"
              type="button">
              Ещё
            </button>
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;