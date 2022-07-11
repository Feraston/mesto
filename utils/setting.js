export const windowPopupZoomImg = document.querySelector('#img-zoom');
export const imgZoom = document.querySelector('.popup__zoom-photo');
export const titleZoomImg = document.querySelector('.popup__title-img');
export const cardsContainer = document.querySelector('.content__cards');
export const initialCards = [
  {
    name: 'Горная дорога',
    link: 'images/foto_one.jpg',
  },
  {
    name: 'Горный мир',
    link: 'images/foto_two.jpg',
  },
  {
    name: 'Дом на краю света',
    link: 'images/foto_three.jpg',
  },
  {
    name: 'Зимний лес',
    link: 'images/foto_four.jpg',
  },
  {
    name: 'Тропа к вечности',
    link: 'images/foto_five.jpg',
  },
  {
    name: 'Место силы',
    link: 'images/foto_six.jpg',
  }
]; 
export const dataBlock = {
  templateData: '#template__contents',
  listContentData: '.content__card',
  sceneryData: '.content__scenery',
  placeData: '.content__place',
  likeData: '.content__like',
  activeLikeData: 'content__like_active',
  deleteData: '.content__delete'
}
export const enableValidation = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_inactive',
  inputErrorClass: 'popup__form-input_error',
  errorClass: 'popup__error_active'
}


// Закрытие esc
export function exitPopupHandler(evt) {
  if (evt.key === 'Escape') {
    const exitPopup = document.querySelector('.popup_open');
    closePopup(exitPopup);
};
};

// Открытие popup
export function openPopup(window) {
  window.classList.add('popup_open');
  document.addEventListener('keydown', exitPopupHandler);
}

// Закрытие popup
export function closePopup(window) {
  window.classList.remove('popup_open');
  document.removeEventListener('keydown', exitPopupHandler);
}