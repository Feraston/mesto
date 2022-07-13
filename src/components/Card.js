export class Card {
  constructor(card, data, handleCardClick) {
    this._name = card.nameMesto;
    this._link = card.linkMesto;
    this._templateData = data.templateData;
    this._listcontentData = data.listContentData;
    this._sceneryData = data.sceneryData;
    this._placeData = data.placeData;
    this._likeData = data.likeData;
    this._activelikeData = data.activeLikeData;
    this._deleteData = data.deleteData;
    this._handleCardClick = handleCardClick;
  }

// Выводим разметку 
_getTemplate() {
  const contentTemplate = document.querySelector(this._templateData).content;
  this._card = contentTemplate.querySelector(this._listcontentData).cloneNode(true);
  this._img = this._card.querySelector(this._sceneryData);
  this._content = this._card.querySelector(this._placeData);
  this._likeCard = this._card.querySelector(this._likeData);
  this._deleteCard = this._card.querySelector(this._deleteData);
  return contentTemplate;
}

_setEvetnListeners() {
  // Открытие увеличенной картинки
  this._img.addEventListener('click', () => {
    this._handleCardClick({
      link: this._link,
      name: this._name,
    })
  });
  // Лайк карточек
  this._likeCard.addEventListener('click', () => {
    this._likeCard.classList.toggle(this._activelikeData);
  });

  // Удаление карточек
  this._deleteCard.addEventListener('click',()=>{
    this._card.remove();
    this._card = null;
  });
}

// Генерация карточки
generateCard() {
  this._getTemplate();
  this._setEvetnListeners();
  this._img.src = this._link;
  this._img.alt = this._name;
  this._content.textContent = this._name;

  return this._card;
}
}
