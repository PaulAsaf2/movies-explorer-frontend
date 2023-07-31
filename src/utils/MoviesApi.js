class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._request = this._request.bind(this);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) { return res.json(); }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getFilms() {
    return this._request(this._baseUrl, {
      credentials: 'false',
      headers: this._headers
    })
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 'Content-Type': 'application/json' }
})

export default moviesApi