import {Card} from './card.js';
import {openPopup, closePopup, dataBlock, initialCards, enableValidation} from './setting.js';
import { FormValidator } from './FormValidator.js';

const buttonOpenEdit = document.querySelector('.profile__edit');
const buttonOpenAdd = document.querySelector('.profile__add');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');
const cardsContainer = document.querySelector('.content__cards');
const popupList = document.querySelectorAll('.popup');

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
  renderCard(createCard(cardTemplate, true));
  closePopup(windowPopupAddCard);
  formAdd.reset();
  validationCard.disableButton();
}

// Добавление карточек
function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate, dataBlock).generateCard();

  return cardTemplates;
}

// Обработка массива с карточками
initialCards.forEach((cardTemplate) => {
  renderCard(createCard(cardTemplate));
});

// Рендер добавленных карточек
function renderCard(cardTemplate, isPrepend = true) {
  if(isPrepend) {
    cardsContainer.prepend(cardTemplate);
  } else {
    cardsContainer.append(cardTemplate);
  }
}

buttonOpenEdit.addEventListener('click', openEditProfile);
formEdit.addEventListener('submit', formSubmitHandler);
buttonOpenAdd.addEventListener('click', ()=>{
  openPopup(windowPopupAddCard);
});
formAdd.addEventListener('submit', formAddElement);
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (event)=> {
    if(event.target.classList.contains('popup__close') || event.target === event.currentTarget) {
      closePopup(popup)
    }
  });
});

 //Настроить валидацию всех форм
 const validationProfile = new FormValidator(enableValidation, formEdit);
 const validationCard = new FormValidator(enableValidation, formAdd);
 validationProfile.enableValidation();
 validationCard.enableValidation();