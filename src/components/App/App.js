import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
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
  const [isOkRequest, setIsOkRequest] = React.useState(false);
  const [isMoviesError, setIsMoviesError] = React.useState(false);
  const [favoriteMovies, setFavoriteMovies] = React.useState([]);

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
          setFavoriteMovies(savedArray);
          localStorage.setItem("savedMoviesArray", JSON.stringify(savedArray));
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
          setIsMoviesError(true);
        });
  }, [loggedIn]);

  React.useEffect(() => {
    if (localFavoriteMovies) {
      setFavoriteMovies(JSON.parse(localFavoriteMovies));
    }
  }, [localFavoriteMovies]);

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
    localStorage.removeItem("searchedMoviesFavorite");
    localStorage.removeItem("inputValFavorite");
    localStorage.removeItem("checkboxStateFavorite");
    navigate("/", { replace: true });
    setLoggedIn(false);
  };

  const handleUpdateUser = (data) => {
    mainApi
      .updateUserInfo(data)
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
        setIsOkRequest(true);
      })
      .catch((err) => {
        console.error(`${err}`);
        setServerError(err);
        setIsOkRequest(false);
      });
  };

  const handleToggleLikeMovie = (movie, isLiked, id) => {
    if (isLiked) {
      handleRemoveMovie(id);
    } else {
      mainApi
        .saveMovie(movie)
        .then((newLikedMovie) => {
          setFavoriteMovies([...favoriteMovies, newLikedMovie]);
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
        setFavoriteMovies(favoriteMovies.filter((m) => m._id !== id));
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
    const filteredFavoriteMovies = JSON.parse(
      localStorage.getItem("searchedMoviesFavorite"),
    );
    if (filteredFavoriteMovies) {
      const newFilteredFavoriteMoviesArr = filteredFavoriteMovies.filter(
        (movie) => movie._id !== id,
      );
      localStorage.setItem(
        "searchedMoviesFavorite",
        JSON.stringify(newFilteredFavoriteMoviesArr),
      );
    }
  };

  const localFavoriteMovies = localStorage.getItem("savedMoviesArray");

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
                    favoriteMovies={favoriteMovies}
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
                    favoriteMovies={favoriteMovies}
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
                    isOkRequest={isOkRequest}
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
