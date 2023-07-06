export default class MoviesApi {
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

  getAllMovies() {
    return this._request(`${this._url}`, {
      headers: this._headers,
    });
  }
}