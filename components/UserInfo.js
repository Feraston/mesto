export default class UserInfo {
  constructor({name, post}) {
    this._userName = name;
    this._userPost = post;
    
  }

  // Принимает данные User
  getUserInfo() {
    this.userData = {};
    this.userData.name = this._userName.textContent;
    this.userData.post = this._userPost.textContent;

    return this.userData;
  }

  // Возвращает данные User
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userPost.textContent = data.post;
  }
}