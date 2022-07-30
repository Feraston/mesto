export default class UserInfo {
  constructor({name, post, avatar}) {
    this._userName = name;
    this._userPost = post;
    this._avatar = avatar;
  }

  // Принимает данные User
  getUserInfo() {
    return {name: this._userName.textContent, post: this._userPost.textContent, avatar: this._avatar.src};
  }

  // Получение id User
  getUserId() {
    return this._idUser;
}

  // Возвращает данные User
  setUserInfo(res) {
      this._userName.textContent = res.name;
      this._userPost.textContent = res.about;
      this._avatar.src = res.avatar;
      this._idUser = res._id;
  }

}