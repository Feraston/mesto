export const imgContainer = document.querySelector('.popup_img');
export const imgZoomCard = document.querySelector('.popup__zoom-photo');
export const titleZoomImg = document.querySelector('.popup__title-img');
export const nameAvtor = document.querySelector('.profile__name');
export const postAvtor = document.querySelector('.profile__post');
export const avatarAvtor = document.querySelector('.profile__avatar');
export const popupEditUser = document.querySelector('.popup_edit');
export const popupAvatar = document.querySelector('.popup_avatar');
export const popupAddCard = document.querySelector('.popup_add');
export const popupDeleteCard = document.querySelector('.popup_delete');
export const contentСontainer = document.querySelector('.content__cards');
export const buttonOpenEdit = document.querySelector('.profile__edit');
export const buttonOpenAdd = document.querySelector('.profile__add');
export const buttonOpenEditAvatar = document.querySelector('.profile__content-edit');
export const formEdit = document.forms.editProfile;
export const formAdd = document.forms.addMesto;
export const formAvatar = document.forms.addAvatar;
export const formDeleteCard = document.forms.deleteCard;

export const dataBlock = {
  templateData: '#template__contents',
  listContentData: '.content__card',
  sceneryData: '.content__scenery',
  placeData: '.content__place',
  likeData: '.content__like',
  numLike: '.content__like-number',
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