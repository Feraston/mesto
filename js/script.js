const openPopup = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');
let formElement = document.querySelector('.popup__form-edit');
let nameInput = document.querySelector('.popup__form-input:nth-of-type(1)');
let jobInput = document.querySelector('.popup__form-input:nth-of-type(2)');
// Template
const contentCards = document.querySelector('.content__cards');
const contentTemplate = document.querySelector('#template__contents').content;
const cardTemplate = contentTemplate.querySelector('.content__card').cloneNode(true);
cardTemplate.querySelector('.content__scenery').src='./images/foto_two.jpg';
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


function togglePopup() {
  if (popup.classList.contains('popup_open')){
      popup.classList.toggle('popup_open');
  } else {
    popup.classList.toggle('popup_open');
    nameInput.value = nameAvtor.textContent;
    jobInput.value = postAvtor.textContent;
  };
};

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  togglePopup();
};

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
popup.addEventListener('click', function(ev) {
  if(ev.target === ev.currentTarget) {
    popup.classList.toggle('popup_open');
  }
});
formElement.addEventListener('submit', formSubmitHandler);