class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._request = this._request.bind(this);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // профиль ----- профиль ----- профиль ----- профиль ----- профиль

  // получает данные профиля
  getProfileData() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: 'include',
      headers: this._headers,
    });
  }

  // отправляет данные профиля
  setProfileData(data) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  // фильмы ----- фильмы ----- фильмы ----- фильмы ----- фильмы

  // получает сохранённые фильмы
  getSavedMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      credentials: 'include',
      headers: this._headers,
    });
  }

  // сохраняет фильм
  createMovie(movie) {
    return this._request(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(movie)
    });
  }

  // удаляет фильм
  deleteMovie(id) {
    return this._request(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      credentials: 'include',
      headers: this._headers,
    });
  }
}

export const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3500',
  baseUrl: 'https://diploma.api.nomoreparties.sbs',
  headers: { "Content-Type": "application/json" },
});
