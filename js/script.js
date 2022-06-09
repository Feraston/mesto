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
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post');
const cardsContainer = document.querySelector('.content__cards');
const imgZoom = document.querySelector('.popup__zoom-photo');
const titleZoomImg = document.querySelector('.popup__title-img');
const popupList = document.querySelectorAll('.popup');

const windowPopupEdit = document.querySelector('#profile-edit');
const windowPopupAddCard = document.querySelector('#add-card');
const windowPopupZoomImg = document.querySelector('#img-zoom');
const contentTemplate = document.querySelector('#template__contents').content;

const formEdit = document.forms.editProfile;
const formAdd = document.forms.addMesto;
const nameInput = formEdit.name;
const jobInput = formEdit.post;
const nameCard = formAdd.nameMesto;
const linkCard = formAdd.linkMesto;

function openPopup(window) {
  window.classList.add('popup_open');
  document.addEventListener('keydown', exitPopupHandler);
}

function closePopup(window) {
  window.classList.remove('popup_open');
  document.removeEventListener('keydown', exitPopupHandler);
}

function exitPopupHandler(evt) {
    if (evt.key === 'Escape') {
      const exitPopup = document.querySelector('.popup_open');
      closePopup(exitPopup);
  };
};

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
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (event)=> {
    if(event.target.classList.contains('popup__close') || event.target === event.currentTarget) {
      closePopup(popup)
    }
  });
});
