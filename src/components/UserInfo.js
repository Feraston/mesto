export default class UserInfo {
  constructor({name, post}) {
    this._userName = name;
    this._userPost = post;
    
  }

  // Принимает данные User
  getUserInfo() {
    // Комментарий для ревьюера
    // Упростил, но дописал ключи, без них всплывает ошибка в webpack
    return {name: this._userName.textContent, post: this._userPost.textContent};
  }

  // Возвращает данные User
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userPost.textContent = data.post;
  }
}