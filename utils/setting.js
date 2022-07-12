export const windowPopupZoomImg = document.querySelector('#img-zoom');
export const imgZoom = document.querySelector('.popup__zoom-photo');
export const titleZoomImg = document.querySelector('.popup__title-img');
export const nameAvtor = document.querySelector('.profile__name');
export const postAvtor = document.querySelector('.profile__post');
export const buttonOpenEdit = document.querySelector('.profile__edit');
export const buttonOpenAdd = document.querySelector('.profile__add');
export const formEdit = document.forms.editProfile;
export const formAdd = document.forms.addMesto;
export const nameInput = formEdit.name;
export const jobInput = formEdit.post;
export const nameCard = formAdd.nameMesto;
export const linkCard = formAdd.linkMesto;
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