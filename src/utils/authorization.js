// export const baseUrl = 'http://localhost:3500'
export const baseUrl = 'https://diploma.api.nomoreparties.sbs'

function checkResponse(res) {
  if (res.ok) { return res.json(); }
  else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export function register(name, email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  })
    .then(checkResponse)
}

export function authorize(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem('loginStatus', data.logged);
      return data;
    })
}
