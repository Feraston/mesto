import Popup from './Popup.js';


export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this.popupForm = this._popup.querySelector('.popup__forms');
    this._inputsList = this.popupForm.querySelectorAll('.popup__form-input');
    this._submitBtn = this.popupForm.querySelector('.popup__form-button');

  }

  // Собирает данные полей input
  _getInputValues() {
    this._inputValues = {};
    this._inputsList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  // Возвращение input
  setInputsValues(data) {
    this._inputsList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    // Отмена стандартной формы отправки
    this.popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.isLoading(true, "Сохранение...");
      this._submitForm(this._getInputValues());
    });
  }

  // Закрытие popup формы
  closePopup() {
    super.closePopup();
    this.popupForm.reset();
  }

  isLoading(isLoad, text = 'Подождите...') {
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
}