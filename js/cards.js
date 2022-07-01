import {windowPopupZoomImg, imgZoom, titleZoomImg,openPopup} from './setting.js';

export class Cards {
  constructor(card, data) {
    this._name = card.name;
    this._link = card.link;
    this._templatedata = data.templateData;
    this._listcontentdata = data.listContentData;
    this._scenerydata = data.sceneryData;
    this._placedata = data.placeData;
    this._likedata = data.likeData;
    this._activelikedata = data.activeLikeData;
    this._deletedata = data.deleteData;
  }

// Выводим разметку 
_getTemplate() {
  const contentTemplate = document.
  querySelector(this._templatedata)
  .content
  .querySelector(this._listcontentdata)
  .cloneNode(true);
  
  return contentTemplate;
}

// Генерация карточки
generateCard() {
  this._element = this._getTemplate();
  this._likeCard();
  this._deleteCards();
  this._popupPhotoZoom();
  this._element.querySelector(this._scenerydata).src = this._link;
  this._element.querySelector(this._scenerydata).alt = this._name;
  this._element.querySelector(this._placedata).textContent = this._name;

  return this._element;
}

// Лайк карточек
_likeCard() {
  this._element.querySelector(this._likedata).addEventListener('click', () => {
    this._element.querySelector(this._likedata).classList.toggle(this._activelikedata);
  });
}

// Удаление карточек
_deleteCards() {
  this._element.querySelector(this._deletedata).addEventListener('click', () => {
    this._element.remove();
  });
}

// Открытие увеличенной картинки
_popupPhotoZoom() {
  this._element.querySelector(this._scenerydata).addEventListener('click', () => {
    imgZoom.setAttribute('src', this._link);
    imgZoom.setAttribute('alt', this._name);
    titleZoomImg.textContent = this._name;
    openPopup(windowPopupZoomImg);
  });
}
}
