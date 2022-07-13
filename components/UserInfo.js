export default class UserInfo {
  constructor({name, post}) {
    this._userName = name;
    this._userPost = post;
    
  }

  getUserInfo() {
    this.userData = {};
    this.userData['form-name'] = this._userName.textContent;
    this.userData['form-post'] = this._userPost.textContent;

    return this.userData;
  }

  setUserInfo(data) {
    this._userName.textContent = data['form-name'];
    this._userPost.textContent = data['form-post'];
  }
}