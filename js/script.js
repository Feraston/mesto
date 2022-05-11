const openPopup = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const nameAvtor = document.querySelector('.profile__name');
const postAvtor = document.querySelector('.profile__post')
let formElement = document.querySelector('.popup__form-edit');
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-post');

function togglePopup() {
  popup.classList.toggle('popup__open');
};

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

popup.addEventListener('click', function(ev) {
    if(ev.target === ev.currentTarget) {
      popup.classList.toggle('popup__open');
    }
});

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  togglePopup();
};

formElement.addEventListener('submit', formSubmitHandler); 