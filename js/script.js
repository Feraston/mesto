const initialCards = [
  {
    name: 'Горная дорога',
    link: 'images/foto_one.jpg',
  },
  {
    name: 'Горный мир',
    link: 'images/foto_two.jpg',
  },
  {
    name: 'Дом на краю света',
    link: 'images/foto_three.jpg',
  },
  {
    name: 'Зимний лес',
    link: 'images/foto_four.jpg',
  },
  {
    name: 'Тропа к вечности',
    link: 'images/foto_five.jpg',
  },
  {
    name: 'Место силы',
    link: 'images/foto_six.jpg',
  }
]; 
const buttonOpenEdit = document.querySelector('.profile__edit');
const buttonOpenAdd = document.querySelector('.profile__add');
const buttonCloseList = document.querySelectorAll('.popup__close');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');
const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');
const cardsContainer = document.querySelector('.content__cards');
const imgZoom = document.querySelector('.popup__zoom-photo');
const titleZoomImg = document.querySelector('.popup__title-img');

const windowPopupEdit = document.querySelector('#profile-edit');
const windowPopupAddCard = document.querySelector('#add-card');
const windowPopupZoomImg = document.querySelector('#img-zoom');
const nameInput = formEdit.querySelector('#form-name');
const jobInput = formEdit.querySelector('#form-post');
const nameCard = formAdd.querySelector('#card-name');
const linkCard = formAdd.querySelector('#card-link');
const contentTemplate = document.querySelector('#template__contents').content;

function openPopup(window) {
  window.classList.add('popup_open');
}

function closePopup(window) {
  window.classList.remove('popup_open');
}

function openEditProfile() {
  nameInput.value = nameAvtor.textContent;
  jobInput.value = postAvtor.textContent;
  openPopup(windowPopupEdit);
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  closePopup(windowPopupEdit);
}

function renderCard(cardTemplate, isPrepend = false) {
  if(isPrepend) {
    cardsContainer.prepend(cardTemplate);
  } else {
    cardsContainer.append(cardTemplate);
  }
}

function createCard({name, link}) {
  const cardTemplate = contentTemplate.querySelector('.content__card').cloneNode(true);
  const cardImg = cardTemplate.querySelector('.content__scenery');
  const cardTitle = cardTemplate.querySelector('.content__place');
  cardImg.src = link;
  cardImg.alt = name;
  cardTitle.textContent = name;
  cardImg.addEventListener('click', ()=>{
    popupPhotoZoom(cardImg.src, cardTitle.textContent);
  });
  cardTemplate.querySelector('.content__like').addEventListener('click', likeCard);
  cardTemplate.querySelector('.content__delete').addEventListener('click', deleteCards);
  return cardTemplate;
}

function renderListCard() {
  initialCards.forEach(cardTemplate => renderCard(createCard(cardTemplate)));
}

function formAddElement(evt) {
  evt.preventDefault();
  const name = nameCard.value;
  const link = linkCard.value;
  renderCard(createCard({name, link}), true);
  closePopup(windowPopupAddCard);
  formAdd.reset();
}

function popupPhotoZoom(link, name) {
    imgZoom.setAttribute('src', link);
    imgZoom.setAttribute('alt', name);
    titleZoomImg.textContent = name;
    openPopup(windowPopupZoomImg);
}

function likeCard(event) {
  const likeCard = event.target;
  likeCard.classList.toggle('content__like_active');
}

function deleteCards(event) {
  const deleteCard = event.target.closest('.content__card');
  deleteCard.remove();
}

renderListCard();

buttonOpenEdit.addEventListener('click', openEditProfile);
formEdit.addEventListener('submit', formSubmitHandler);
buttonOpenAdd.addEventListener('click', ()=>{
  openPopup(windowPopupAddCard);
});
formAdd.addEventListener('submit', formAddElement);
buttonCloseList.forEach((button) => {
  button.addEventListener('click', (event)=> {
    const comPopup = event.target.closest('.popup');
    closePopup(comPopup);
  });
});