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
} from '../utils/setting.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

 //Настроить валидацию всех форм
 const validationProfile = new FormValidator(enableValidation, formEdit);
 const validationCard = new FormValidator(enableValidation, formAdd);
 validationProfile.enableValidation();
 validationCard.enableValidation();

const userEdit = new UserInfo({
  name: nameAvtor,
  post: postAvtor
});

// Форма редактирования профиля
const popupEdit = new PopupWithForm('.popup_edit', (data) => {
  userEdit.setUserInfo(data);
  popupEdit.closePopup();
});

// Попап редактирования профиля
function openEditProfile() {
  const userData = userEdit.getUserInfo(); // набросок, закончить правки в ветке userinfo

  popupEdit.setInputsValues(userData);
  popupEdit.openPopup();
}

popupEdit.setEventListeners();
buttonOpenEdit.addEventListener('click', openEditProfile);

// Добавление карточек
function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate, dataBlock).generateCard();
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
buttonOpenAdd.addEventListener('click', openAddCard);

function openAddCard() {
  formAddPopup.openPopup();
}