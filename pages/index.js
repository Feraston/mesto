import {Card} from '../components/Card.js';
import { 
  dataBlock, 
  initialCards, 
  enableValidation,
  buttonOpenEdit,
  buttonOpenAdd, 
  formEdit, 
  formAdd, 
  nameAvtor, 
  postAvtor,
  avatarAvtor,
} from '../utils/setting.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';

 //Настроить валидацию всех форм
 const validationProfile = new FormValidator(enableValidation, formEdit);
 const validationCard = new FormValidator(enableValidation, formAdd);
 validationProfile.enableValidation();
 validationCard.enableValidation();

const userEdit = new UserInfo({
  name: nameAvtor,
  post: postAvtor,
  avatar: avatarAvtor
});

// Форма редактирования профиля
const popupEdit = new PopupWithForm('.popup_edit', (data) => {
  userEdit.setUserInfo(data);
  popupEdit.closePopup();
});

// Попап редактирования профиля
function openEditProfile() {
  const userData = userEdit.getUserInfo();
  popupEdit.setInputsValues(userData);
  popupEdit.openPopup();
}

popupEdit.setEventListeners();
buttonOpenEdit.addEventListener('click', openEditProfile);

// Добавление карточек
function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate, dataBlock, imgZoom).generateCard();
  return cardTemplates;
}

// Добавление карточек из массива
const сardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardTemplates = createCard(item);
    сardList.addItem(cardTemplates);
  }
}, '.content__cards');

сardList.renderItems();

//Форма добавления карточек
const formAddPopup = new PopupWithForm(".popup_add", (data) => {
  сardList.addItem(createCard(data));
  formAddPopup.closePopup();
  validationCard.disableButton();
});

formAddPopup.setEventListeners();
buttonOpenAdd.addEventListener('click', () => {formAddPopup.openPopup()});

const popupZoom = new PopupWithImage(".popup_img");

//Открытие увеличенной картинки
function imgZoom({ link, name }) {
  popupZoom.openPopup({
    name,
    link,
  }); 
}

popupZoom.setEventListeners();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '6058d091-3597-4634-88a3-a31b18eef67f',
    'Content-Type': 'application/json'
  }
})