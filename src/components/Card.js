import { api, userEdit } from './../pages/index.js';

export class Card {
  constructor(card, data, handleCardClick, handleCardDelete) {
    this._name = card.name;
    this._link = card.link;
    this._idCard = card._id;
    this._avtor = card.owner.name;
    this._avtorId = card.owner._id;
    this._cardLike = card.likes;
    this._templateData = data.templateData;
    this._listcontentData = data.listContentData;
    this._sceneryData = data.sceneryData;
    this._placeData = data.placeData;
    this._likeData = data.likeData;
    this._numLike = data.numLike;
    this._activelikeData = data.activeLikeData;
    this._deleteData = data.deleteData;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
  }

// Выводим разметку 
_getTemplate() {
  const contentTemplate = document.querySelector(this._templateData).content;
  this._card = contentTemplate.querySelector(this._listcontentData).cloneNode(true);
  this._img = this._card.querySelector(this._sceneryData);
  this._content = this._card.querySelector(this._placeData);
  this._likeCard = this._card.querySelector(this._likeData);
  this._numberLike = this._card.querySelector(this._numLike);
  this._deleteCard = this._card.querySelector(this._deleteData);

  return contentTemplate;
}

_setEvetnListeners() {
  // Открытие увеличенной картинки
  this._img.addEventListener('click', () => {
    this._handleCardClick({
      link: this._link,
      name: `Автор: ${this._avtor}. Описание: ${this._name}`,
    })
  });

  // Событие лайка карточек
  this._likeCard.addEventListener('click', () => {
    if (this._likeCard.classList.contains(this._activelikeData)) {
      api.deleteLike(this._idCard)
        .then((like) => {
          this._handleClickLike(like);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api.putLike(this._idCard)
      .then((like) => {
        this._handleClickLike(like);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
  });

  // Удаление карточек
  this._deleteCard.addEventListener('click', ()=>{
    this._handleCardDelete(this._card, this._idCard);
  });
}

// Лайкнуть/дизлайкнуть карточку
_handleClickLike (like) {
  this._likeCard.classList.toggle(this._activelikeData);
  this._numberLike.textContent = like.likes.length;
}

_checkLikeCard() {
  if (this._cardLike.some((like) => {return like._id === userEdit.getUserId()})) {
    this._likeCard.classList.add(this._activelikeData);
  }
}

// Генерация карточки
generateCard() {
  this._getTemplate();
  this._setEvetnListeners();
  this._checkLikeCard();
  this._img.src = this._link;
  this._img.alt = this._name;
  this._content.textContent = this._name;
  this._numberLike.textContent = this._cardLike.length;
  if (this._avtorId !== userEdit.getUserId()) {
    this._deleteCard.remove();
  }

  return this._card;
}
}
