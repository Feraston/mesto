export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._submitBtn = this._popup.querySelector('.popup__form-button');
    this._closePopup = this._exitPopupHandler.bind(this);
  }

  // Закрытие popup через Escape
  _exitPopupHandler(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
  };
  }

  setEventListeners() {
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
    window.addEventListener('keydown', this._closePopup);
  }

  // Закрытие popup
  closePopup () {
    this._popup.classList.remove('popup_open');
    window.removeEventListener('keydown', this._closePopup);
  }

    
  isLoading(isLoad, text = 'Подождите...') {
    if (isLoad) {
      this._submitBtn.textContent = text;
      this._submitBtn.disabled = true;
      this._submitBtn.classList.add('popup__form-button_inactive');
    } else {
      this._submitBtn.textContent = this._submitBtn.value;
      this._submitBtn.classList.remove('popup__form-button_inactive');
    }
  }
} 