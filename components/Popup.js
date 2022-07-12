export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopup = this._handleEscClose.bind(this);
  }

  // Закрытие popup через Escape
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
  };
  }

  _setEventListeners() {
    // Событие закрытия popup окон
    this._popup.addEventListener('mousedown', (event)=> {
        if(event.target.classList.contains('popup__close') || event.target === event.currentTarget) {
          this.closePopup();
        }
      });
  }

  // Открытие popup
  openPopup () {
    this._popup.classList.add('popup_open');
    this._popup.addEventListener('keydown', this._closePopup);
  }

  // Закрытие popup
  closePopup () {
    this._popup.classList.remove('popup_open');
    this._popup.removeEventListener('keydown', this._closePopup);
  }
}