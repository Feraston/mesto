// Основная функция включения валидации форм
const enableValidation = setting => {
  const settingList = Array.from(document.querySelectorAll(setting.formSelector));
  settingList.forEach((formElement) => {
    formElement.addEventListener('submit', evt => evt.preventDefault());
    setEventListeners (formElement, setting);
  });
};

// Функция настройки валидации форм
const setEventListeners = (formElement, setting) => {
  const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
  const buttonElement = formElement.querySelector(setting.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, setting);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, setting);
      toggleButtonState(inputList, buttonElement, setting);
    });
  });
  formElement.addEventListener('reset', () => disableButton(buttonElement, setting));
};

// Блокировка кнопки при открытии popap_add
function disableButton(buttonElement, setting) {
  buttonElement.classList.add(setting.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

// Проверка состояния полей
const toggleButtonState = (inputList, buttonElement, setting) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(setting.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(setting.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

// Функция проверки input на ошибки
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
  });
};

// Функция проверки валидности полей
const checkInputValidity = (formElement, inputElement, setting) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, setting);
  } else {
    hideInputError(formElement, inputElement, setting);
  }
};

// Функция вызова ошибки
const showInputError = (formElement, inputElement, errorMessage, setting) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(setting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(setting.errorClass);
};

// Функция прячет ошибку
const hideInputError = (formElement, inputElement, setting) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(setting.inputErrorClass);
  errorElement.classList.remove(setting.errorClass);
  errorElement.textContent = '';
};

enableValidation({
  formSelector: '.popup__forms',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_inactive',
  inputErrorClass: 'popup__form-input_error',
  errorClass: 'popup__error_active'
});