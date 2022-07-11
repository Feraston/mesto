// Добавление карточек -- переписано
function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate, dataBlock).generateCard();

  return cardTemplates;
}

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