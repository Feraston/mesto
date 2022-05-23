const openPopupEdit = document.querySelector('.profile__edit');
const openPopupAddCard = document.querySelector('.profile__add');
const popup = document.querySelectorAll('.popup');
const closePopup = document.querySelectorAll('.popup__close');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');
const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');
const nameInput = document.querySelectorAll('.popup__form-input:nth-of-type(1)');
const jobLinkInput = document.querySelectorAll('.popup__form-input:nth-of-type(2)');
const contentCards = document.querySelector('.content__cards');
const contentTemplate = document.querySelector('#template__contents').content;
const initialCards = [
  {
    name: 'Горная дорога',
    link: 'images/foto_one.jpg',
    alt: 'Горная дорога'
  },
  {
    name: 'Горный мир',
    link: 'images/foto_two.jpg',
    alt: 'Горный мир'
  },
  {
    name: 'Дом на краю света',
    link: 'images/foto_three.jpg',
    alt: 'Дом на краю света'
  },
  {
    name: 'Зимний лес',
    link: 'images/foto_four.jpg',
    alt: 'Зимний лес'
  },
  {
    name: 'Тропа к вечности',
    link: 'images/foto_five.jpg',
    alt: 'Тропа к вечности'
  },
  {
    name: 'Место силы',
    link: 'images/foto_six.jpg',
    alt: 'Место силы'
  }
]; 

function popupEditProfile() {
  if (popup[0].classList.contains('popup_open')){
      popup[0].classList.toggle('popup_open');
  } else {
    popup[0].classList.toggle('popup_open');
    nameInput[0].value = nameAvtor.textContent;
    jobLinkInput[0].value = postAvtor.textContent;
  };
};

function popupAddCard() {
      popup[1].classList.toggle('popup_open');
};

function formAddElement(evt) {
  evt.preventDefault();
  const cardTemplate = contentTemplate.querySelector('.content__card').cloneNode(true);
  cardTemplate.querySelector('.content__scenery').src= jobLinkInput[1].value;
  cardTemplate.querySelector('.content__scenery').alt= nameInput[1].value;
  cardTemplate.querySelector('.content__place').textContent = nameInput[1].value;
  contentCards.prepend(cardTemplate);
  nameInput[1].value = '';
  jobLinkInput[1].value = '';
  popupAddCard();
};

initialCards.forEach((element) => {
  const cardTemplate = contentTemplate.querySelector('.content__card').cloneNode(true);
  cardTemplate.querySelector('.content__scenery').src= element.link;
  cardTemplate.querySelector('.content__scenery').alt= element.alt;
  cardTemplate.querySelector('.content__place').textContent = element.name;
  contentCards.append(cardTemplate); 
});

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameAvtor.textContent = nameInput[0].value;
  postAvtor.textContent = jobLinkInput[0].value;
  popupEditProfile();
};

openPopupEdit.addEventListener('click', popupEditProfile);
closePopup[0].addEventListener('click', popupEditProfile);
openPopupAddCard.addEventListener('click', popupAddCard);
closePopup[1].addEventListener('click', popupAddCard);

formEdit.addEventListener('submit', formSubmitHandler);
formAdd.addEventListener('submit', formAddElement);