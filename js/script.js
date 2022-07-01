import {Cards} from './cards.js';
import {openPopup, closePopup, dataBlock, initialCards} from './setting.js';

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
}

// Добавление карточек
function createCard(cardTemplate) {
  const cardTemplates = new Cards(cardTemplate, dataBlock).generateCard();

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