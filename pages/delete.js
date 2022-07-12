// Обработка массива с карточками -- переписано
initialCards.forEach((cardTemplate) => {
  renderCard(createCard(cardTemplate));
});

// Рендер добавленных карточек -- переписано
function renderCard(cardTemplate, isPrepend = true) {
  if(isPrepend) {
    cardsContainer.prepend(cardTemplate);
  } else {
    cardsContainer.append(cardTemplate);
  }
}

// Закрытие esc --- переписано
export function exitPopupHandler(evt) {
  if (evt.key === 'Escape') {
    const exitPopup = document.querySelector('.popup_open');
    closePopup(exitPopup);
};
};


// -- переписано
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (event)=> {
    if(event.target.classList.contains('popup__close') || event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

// Открытие popup
export function openPopup(window) {
  window.classList.add('popup_open');
  document.addEventListener('keydown', exitPopupHandler);
}

// Закрытие popup
export function closePopup(window) {
  window.classList.remove('popup_open');
  document.removeEventListener('keydown', exitPopupHandler);
}

const windowPopupEdit = document.querySelector('#profile-edit');
const windowPopupAddCard = document.querySelector('#add-card');

// Редактирование профиля -- переписано
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  popupEdit.closePopup();

  // Форма добавления карточек -- переписано
function formAddElement(evt) {
  evt.preventDefault();
  const cardTemplate = {
    name: nameCard.value,
    link: linkCard.value
  };
  createCard(cardTemplate);

  formAddPopup.closePopup();
  validationCard.disableButton();
}
}