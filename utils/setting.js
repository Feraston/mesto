export const imgZoom = document.querySelector('.popup__zoom-photo');
export const titleZoomImg = document.querySelector('.popup__title-img');
export const nameAvtor = document.querySelector('.profile__name');
export const postAvtor = document.querySelector('.profile__post');
export const buttonOpenEdit = document.querySelector('.profile__edit');
export const buttonOpenAdd = document.querySelector('.profile__add');
export const formEdit = document.forms.editProfile;
export const formAdd = document.forms.addMesto;

import gornayadoroga from '../images/foto_one.jpg';
import gornyimir from '../images/foto_two.jpg';
import domnakrayu from '../images/foto_three.jpg';
import zimles from '../images/foto_four.jpg';
import tropavech from '../images/foto_five.jpg';
import mestosily from '../images/foto_six.jpg';

export const initialCards = [
  {
    nameMesto: 'Горная дорога',
    linkMesto: gornayadoroga,
  },
  {
    nameMesto: 'Горный мир',
    linkMesto: gornyimir,
  },
  {
    nameMesto: 'Дом на краю света',
    linkMesto: domnakrayu,
  },
  {
    nameMesto: 'Зимний лес',
    linkMesto: zimles,
  },
  {
    nameMesto: 'Тропа к вечности',
    linkMesto: tropavech,
  },
  {
    nameMesto: 'Место силы',
    linkMesto: mestosily,
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