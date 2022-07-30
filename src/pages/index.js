import Api from '../components/Api.js';
import "./index.css";
import {Card} from '../components/Card.js';
import { 
  dataBlock, 
  enableValidation,
  buttonOpenEdit,
  buttonOpenAdd,
  buttonOpenEditAvatar,
  formEdit, 
  formAdd,
  formAvatar, 
  nameAvtor, 
  postAvtor,
  avatarAvtor
} from '../utils/setting.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

 //Настроить валидацию всех форм
 const validationProfile = new FormValidator(enableValidation, formEdit);
 const validationCard = new FormValidator(enableValidation, formAdd);
 const validationAvatar = new FormValidator(enableValidation, formAvatar);

 validationProfile.enableValidation();
 validationCard.enableValidation();
 validationAvatar.enableValidation();

  // User profile
export const userEdit = new UserInfo({
  name: nameAvtor,
  post: postAvtor,
  avatar: avatarAvtor
});

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '6058d091-3597-4634-88a3-a31b18eef67f',
    'Content-Type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([users, cards]) => {
    userEdit.setUserInfo(users);
    сardList.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
});

// Попап редактирования профиля
function openEditProfile() {
  const userData = userEdit.getUserInfo();
  popupEdit.setInputsValues(userData);
  popupEdit.openPopup();
}

// Форма редактирования профиля
const popupEdit = new PopupWithForm('.popup_edit', (data) => {
  api.setUserInfo(data)
    .then((data) => {
      userEdit.setUserInfo(data);
      popupEdit.closePopup();
    })
    .catch((err) => {
      console.log(err);
    });
});

popupEdit.setEventListeners();
buttonOpenEdit.addEventListener('click', openEditProfile);

// Попап редактирования аватара
function openEditAvatar() {
  const userData = userEdit.getUserInfo();
  popupEditAvatar.setInputsValues(userData);
  popupEditAvatar.openPopup();
}

// Форма редактирования аватара
const popupEditAvatar = new PopupWithForm('.popup_avatar', (data) => {
  api.setUserAvatar(data)
    .then((data) => {
      userEdit.setUserInfo(data);
      popupEditAvatar.closePopup();
    })
    .catch((err) => {
      console.log(err);
    });
});

popupEditAvatar.setEventListeners();
buttonOpenEditAvatar.addEventListener('click', openEditAvatar);

// Добавление карточек
function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate, dataBlock, imgZoom).generateCard();
  return cardTemplates;
}

// Добавление карточек из массива
const сardList = new Section({
  renderer: (item) => {
    const cardTemplates = createCard(item);
    сardList.addItem(cardTemplates);
  }
}, '.content__cards');

//Форма добавления карточек
const formAddPopup = new PopupWithForm(".popup_add", (data) => {
  api.addCards(data)
    .then((res) => {
      сardList.addItem(createCard(res));
      formAddPopup.closePopup();
      validationCard.disableButton();
    })
    .catch((err) => {
      console.log(err);
    })
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