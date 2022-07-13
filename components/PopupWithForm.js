import Popup from './Popup.js';


export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this.popupForm = this._popup.querySelector(".popup__forms");
    this._inputsList = this.popupForm.querySelectorAll(".popup__form-input");
  }

  // Собирает данные полей input
  _getInputValues() {
    this._inputValues = {};

    this._inputsList.forEach((input) => {
      this._inputValues[input.id] = input.value;
    });

    return this._inputValues;
  }

  // Возвращение input
  setInputsValues(data) {
    this._inputsList.forEach((input) => {
      input.value = data[input.id];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    // Отмена стандартной формы отправки
    this.popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._submitForm(this._getInputValues());
    });
  }

  // Закрытие popup формы
  closePopup() {
    super.closePopup();
    this.popupForm.reset();
  }
}