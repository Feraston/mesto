const openPopupEdit = document.querySelector('.profile__edit');
const openPopupAddCard = document.querySelector('.profile__add');
const popup = document.querySelectorAll('.popup');
const closePopup = document.querySelectorAll('.popup__close');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');
let formElement = document.querySelector('.popup__form-edit');
let nameInput = document.querySelectorAll('.popup__form-input:nth-of-type(1)');
let jobInput = document.querySelectorAll('.popup__form-input:nth-of-type(2)');

// Template
const contentCards = document.querySelector('.content__cards');
const contentTemplate = document.querySelector('#template__contents').content;
const cardTemplate = contentTemplate.querySelector('.content__card').cloneNode(true);
cardTemplate.querySelector('.content__scenery').src='./images/foto_three.jpg';
cardTemplate.querySelector('.content__scenery').alt='Новинка';
cardTemplate.querySelector('.content__place').textContent = 'Дюк Корморант';

contentCards.append(cardTemplate); 

const initialCards = [
  {
    name: 'Горная дорога',
    link: 'images/foto_one.jpg'
  },
  {
    name: 'Горный мир',
    link: 'images/foto_two.jpg'
  },
  {
    name: 'Дом на краю света',
    link: 'images/foto_three.jpg'
  },
  {
    name: 'Зимний лес',
    link: 'images/foto_four.jpg'
  },
  {
    name: 'Тропа к вечности',
    link: 'images/foto_five.jpg'
  },
  {
    name: 'Место силы',
    link: 'images/foto_six.jpg'
  }
]; 

function popupEditProfile() {
  if (popup[0].classList.contains('popup_open')){
      popup[0].classList.toggle('popup_open');
  } else {
    popup[0].classList.toggle('popup_open');
    nameInput[0].value = nameAvtor.textContent;
    jobInput[0].value = postAvtor.textContent;
  };
};

function popupAddCard() {
  if (popup[1].classList.contains('popup_open')){
      popup[1].classList.toggle('popup_open');
  } else {
    popup[1].classList.toggle('popup_open');
  };
};

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameAvtor.textContent = nameInput[0].value;
  postAvtor.textContent = jobInput[0].value;
  popupEditProfile();
};

openPopupEdit.addEventListener('click', popupEditProfile);
closePopup[0].addEventListener('click', popupEditProfile);

openPopupAddCard.addEventListener('click', popupAddCard);
closePopup[1].addEventListener('click', popupAddCard);

formElement.addEventListener('submit', formSubmitHandler);