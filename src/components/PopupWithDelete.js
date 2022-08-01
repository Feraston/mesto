import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleCardDelete) {
    super(popupSelector);
    this._handleCardDelete = handleCardDelete;
    this.popupForm = this._popup.querySelector('.popup__forms');
    this._submitBtn = this.popupForm.querySelector('.popup__form-button');
  }

  openPopup(card, idCard) {
    super.openPopup();
    this._idCard = idCard;
    this._card = card;
  }

  isLoading(isLoad, text = 'Удаление...') {
    if (isLoad) {
      this._submitBtn.textContent = text;
      this._submitBtn.disabled = true;
      this._submitBtn.classList.add('popup__form-button_inactive');
    } else {
      this._submitBtn.textContent = this._submitBtn.value;
      this._submitBtn.disabled = false;
      this._submitBtn.classList.remove('popup__form-button_inactive');
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this.popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.isLoading(true);
      this._handleCardDelete(this._card, this._idCard);
    });
  }
}