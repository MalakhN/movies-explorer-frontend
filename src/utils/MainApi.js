import { BASE_LINK } from "./constants";

class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.text().then((text) => {
      return Promise.reject({
        statusError: res.statusCode,
        error: JSON.parse(text).message,
      });
    });
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      }),
    }).then(this._checkResponse);
  }

  authorization(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: `${email}`, password: `${password}` }),
    })
      .then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          return data;
        }
      });
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(this._checkResponse)
      .then((data) => data);
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  updateUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    });
  }

  getSavedMovies() {
    return this._request(`${this._url}/movies`, {
      headers: this._headers,
    });
  }

  saveMovie(movie) {
    return this._request(`${this._url}/movies`, {
      method: "POST",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: BASE_LINK + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: BASE_LINK + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
      headers: this._headers,
    });
  }

  unsaveMovie(id) {
    return this._request(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

export default new MainApi({
  url: "https://api.movies-explorer.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});