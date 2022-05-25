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
const openPopupEdit = document.querySelector('.profile__edit');
const openPopupAddCard = document.querySelector('.profile__add');
const closePopup = document.querySelectorAll('.popup__close');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');
const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');
const contentCards = document.querySelector('.content__cards');
const imgZoom = document.querySelector('.popup__zoom-photo');
const titleZoomImg = document.querySelector('.popup__title-img');

const windowPopupEdit = document.querySelector('#profile-edit');
const windowPopupAddCard = document.querySelector('#add-card');
const windowPopupZoomImg = document.querySelector('#img-zoom');
const nameInput = document.querySelector('#form-name');
const jobInput = document.querySelector('#form-post');
const nameCard = document.querySelector('#card-name');
const linkCard = document.querySelector('#card-link');
const contentTemplate = document.querySelector('#template__contents').content;

function togglePopup(window) {
  if (window.classList.contains('popup_open')){
    window.classList.remove('popup_open');
  } else {
    window.classList.add('popup_open');
  };
}

function popupEditProfile() {
  if (windowPopupEdit.classList.contains('popup_open')){
    togglePopup(windowPopupEdit);
  } else {
    togglePopup(windowPopupEdit);
    nameInput.value = nameAvtor.textContent;
    jobInput.value = postAvtor.textContent;
  };
};

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  togglePopup(windowPopupEdit);
};

initialCards.forEach((element) => {
  const cardTemplate = contentTemplate.querySelector('.content__card').cloneNode(true);
  cardTemplate.querySelector('.content__scenery').src= element.link;
  cardTemplate.querySelector('.content__scenery').alt= element.alt;
  cardTemplate.querySelector('.content__place').textContent = element.name;
  contentCards.append(cardTemplate);
  cardTemplate.querySelector('.content__scenery').addEventListener('click', ()=>{
    popupPhotoZoom(element.link, element.name);
  });
  cardTemplate.querySelector('.content__like').addEventListener('click', cardLike);
  cardTemplate.querySelector('.content__delete').addEventListener('click', deleteCards);
});

function formAddElement(evt) {
  evt.preventDefault();
  const cardTemplate = contentTemplate.querySelector('.content__card').cloneNode(true);
  cardTemplate.querySelector('.content__scenery').src= linkCard.value;
  cardTemplate.querySelector('.content__scenery').alt= linkCard.value;
  cardTemplate.querySelector('.content__place').textContent = nameCard.value;
  contentCards.prepend(cardTemplate);
  cardTemplate.querySelector('.content__scenery').addEventListener('click', ()=>{
    popupPhotoZoom(cardTemplate.querySelector('.content__scenery').src, cardTemplate.querySelector('.content__place').textContent);
  });
  cardTemplate.querySelector('.content__like').addEventListener('click', cardLike);
  cardTemplate.querySelector('.content__delete').addEventListener('click', deleteCards);
  nameCard.value = '';
  linkCard.value = '';
  togglePopup(windowPopupAddCard);
};

function popupPhotoZoom(Link, Name) {
  if (windowPopupZoomImg.classList.contains('popup_open')){
    togglePopup(windowPopupZoomImg);
    // imgZoom.removeAttribute('src');
    // imgZoom.removeAttribute('alt');
    // titleZoomImg.textContent = '';
  } else {
    togglePopup(windowPopupZoomImg);
    imgZoom.setAttribute('src', Link);
    imgZoom.setAttribute('alt', Name);
    titleZoomImg.textContent = Name;
  };
};

function cardLike(event) {
  const likeCard = event.target;
  likeCard.classList.toggle('content__like_active');
}

function deleteCards(event) {
  const deleteCard = event.target.closest('.content__card');
  deleteCard.remove();
}

openPopupEdit.addEventListener('click', popupEditProfile);
formEdit.addEventListener('submit', formSubmitHandler);
openPopupAddCard.addEventListener('click', ()=>{
  togglePopup(windowPopupAddCard);
});
formAdd.addEventListener('submit', formAddElement);
closePopup.forEach((button) => {
  button.addEventListener('click', (event)=> {
    const comPopup = event.target.closest('.popup');
    togglePopup(comPopup);
  });
});

