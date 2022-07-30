import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleCardDelete) {
    super(popupSelector);
    this._handleCardDelete = handleCardDelete;
    this._buttonDelete = this._popup.querySelector('.popup__button-delete');
  }

  openPopup(card, idCard) {
    super.openPopup();
    this._idCard = idCard;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();

    this._buttonDelete.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.isLoading(true, "Удаление...");
      this._handleCardDelete(this._card, this._idCard);
    });
  }

}