import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile"
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [serverError, setServerError] = React.useState({});
  const [isRequestSuccessful, setIsRequestSuccessful] = React.useState(false);
  const [isMoviesError, setIsMoviesError] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const mainApi = new MainApi({
    url: "https://api.movies-explorer.nomoredomains.rocks",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });

  React.useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      mainApi
        .checkToken()
        .then((res) => {
          setLoggedIn(true);
          navigate(pathname);
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    }
  }, []);

  React.useEffect(() => {
    loggedIn &&
      Promise.all([
        mainApi.getUserInfo(),
        moviesApi.getAllMovies(),
        mainApi.getSavedMovies(),
      ])
        .then(([userData, initialMovies, savedArray]) => {
          setCurrentUser(userData);
          setMovies(initialMovies);
          setIsMoviesError(false);
          setSavedMovies(savedArray);
          localStorage.setItem("savedMoviesArray", JSON.stringify(savedArray));
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
          setIsMoviesError(true);
        });
  }, [loggedIn]);

  React.useEffect(() => {
    if (localSavedMovies) {
      setSavedMovies(JSON.parse(localSavedMovies));
    }
  }, [localSavedMovies]);

  const onRegister = (values) => {
    mainApi
      .register(values.name, values.email, values.password)
      .then(() => {
        onLogin(values);
      })
      .catch((err) => {
        console.log(`${err}`);
        setServerError(err);
      });
  };

  const onLogin = (values) => {
    mainApi
      .authorization(values.email, values.password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`${err}`);
        setServerError(err);
      });
  };

  const onSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("searchedMovies");
    localStorage.removeItem("inputVal");
    localStorage.removeItem("checkboxState");
    localStorage.removeItem("searchedMoviesSaved");
    localStorage.removeItem("inputValSaved");
    localStorage.removeItem("checkboxStateSaved");
    navigate("/", { replace: true });
    setLoggedIn(false);
  };

  const handleUpdateUser = (data) => {
    mainApi
      .updateUserInfo(data)
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
        setIsRequestSuccessful(true);
      })
      .catch((err) => {
        console.error(`${err}`);
        setServerError(err);
        setIsRequestSuccessful(false);
      });
  };

  const handleToggleLikeMovie = (movie, isLiked, id) => {
    if (isLiked) {
      handleRemoveMovie(id);
    } else {
      mainApi
        .saveMovie(movie)
        .then((newLikedMovie) => {
          setSavedMovies([...savedMovies, newLikedMovie]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleRemoveMovie = (id) => {
    mainApi
      .unsaveMovie(id)
      .then(() => {
        setSavedMovies(savedMovies.filter((m) => m._id !== id));
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
    const filteredSavedMovies = JSON.parse(
      localStorage.getItem("searchedMoviesSaved"),
    );
    if (filteredSavedMovies) {
      const newFilteredSavedMoviesArr = filteredSavedMovies.filter(
        (movie) => movie._id !== id,
      );
      localStorage.setItem(
        "searchedMoviesSaved",
        JSON.stringify(newFilteredSavedMoviesArr),
      );
    }
  };

  const localSavedMovies = localStorage.getItem("savedMoviesArray");

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggedIn}
                    movies={movies}
                    savedMovies={savedMovies}
                    onToggleLike={handleToggleLikeMovie}
                    moviesError={isMoviesError}
                  />
                }
              />
            <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    onRemoveMovie={handleRemoveMovie}
                    savedMovies={savedMovies}
                  />
                }
              />
            <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    onSignOut={onSignOut}
                    onUpdateProfile={handleUpdateUser}
                    loggedIn={loggedIn}
                    isRequestSuccessful={isRequestSuccessful}
                  />
                }
              />
            <Route
                path="/signup"
                element={
                  <Register
                    onRegister={onRegister}
                    loggedIn={loggedIn}
                    serverError={serverError}
                  />
                }
              />
            <Route
                path="/signin"
                element={
                  <Login
                    onLogin={onLogin}
                    loggedIn={loggedIn}
                    serverError={serverError}
                  />
                }
              />
            <Route path="*" element={<NotFound loggedIn={loggedIn} />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
