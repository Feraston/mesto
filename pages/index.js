import {Card} from '../components/Card.js';
import { dataBlock, initialCards, enableValidation} from '../utils/setting.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';

const buttonOpenEdit = document.querySelector('.profile__edit');
const buttonOpenAdd = document.querySelector('.profile__add');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');

const windowPopupEdit = document.querySelector('#profile-edit');
const windowPopupAddCard = document.querySelector('#add-card');

const formEdit = document.forms.editProfile;
const formAdd = document.forms.addMesto;
const nameInput = formEdit.name;
const jobInput = formEdit.post;
const nameCard = formAdd.nameMesto;
const linkCard = formAdd.linkMesto;

// Попап редактирования профиля
function openEditProfile() {
  nameInput.value = nameAvtor.textContent;
  jobInput.value = postAvtor.textContent;
  openPopup(windowPopupEdit);
}

// Редактирование профиля
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  closePopup(windowPopupEdit);
}

// Форма добавления карточек
function formAddElement(evt) {
  evt.preventDefault();
  const cardTemplate = {
    name: nameCard.value,
    link: linkCard.value
  };
 createCard(cardTemplate);

  closePopup(windowPopupAddCard);
  formAdd.reset();
  validationCard.disableButton();
}

// Добавление карточек
function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate, dataBlock).generateCard();

  return cardTemplates;
}

buttonOpenEdit.addEventListener('click', openEditProfile);
formEdit.addEventListener('submit', formSubmitHandler);
buttonOpenAdd.addEventListener('click', ()=>{
  openPopup(windowPopupAddCard);
});
formAdd.addEventListener('submit', formAddElement);


 //Настроить валидацию всех форм
 const validationProfile = new FormValidator(enableValidation, formEdit);
 const validationCard = new FormValidator(enableValidation, formAdd);
 validationProfile.enableValidation();
 validationCard.enableValidation();


// Добавление карточек из массива
const сardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardTemplates = createCard(item);
    сardList.addItem(cardTemplates);
  }
}, '.content__cards');

сardList.renderItems();