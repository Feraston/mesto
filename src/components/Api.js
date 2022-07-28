export default class Api {
  constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
  }

  // Проверка получаения данных
  _check(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Возникла ошибка: ${res.status}`);
  }

// Запрос пользователя
  getInfoUser() {
    return fetch(`${this._url}/users/me`, {
        headers: this._headers,
        method: 'GET'
    })
        .then(res => this._check(res))
}

  // Редактирование пользователя
  setInfoUser(userData) {
    return fetch(`${this._url}/users/me`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify({
            name: userData.name,
            about: userData.info
        })
    })
        .then(res => this._check(res))
}

  // Редактирование аватара
  setUserAvatar (userData) {
      return fetch(`${this._url}/users/me/avatar`, {
          headers: this._headers,
          method: 'PATCH',
          body: JSON.stringify({
              avatar: userData.avatar
          })
      })
          .then(res => this._check(res))
  }
}