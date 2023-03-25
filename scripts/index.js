const popup = document.querySelector('.popup');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupAdd = document.querySelector('.popup_add');
const buttonAdd = document.querySelector('.profile__add-button');
const closeButton = popup.querySelector('.popup__close');
const closeAddButton = popupAdd.querySelector('.popup__close');
let userName = document.querySelector('#name-input');
let userAbout = document.querySelector('#about-input');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle')
let formElement = document.querySelector('.popup__form');


const toggleOpenPopup = function () {
   userName.value = profileTitle.textContent;
   userAbout.value = profileSubtitle.textContent;
   popup.classList.toggle('popup_opened')
};

const toggleAddPopup = function () {
  popupAdd.classList.toggle('popup_opened')
};

const toggleClosePopup = function () {
   popup.classList.toggle('popup_opened');
};

const toggleAddClose = function () {
   popupAdd.classList.toggle('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = userName.value;
  profileSubtitle.textContent = userAbout.value;
  toggleClosePopup();
}

buttonAdd.addEventListener('click', toggleAddPopup);
buttonOpenEdit.addEventListener('click', toggleOpenPopup);
closeButton.addEventListener("click", toggleClosePopup);
closeAddButton.addEventListener("click", toggleAddClose);
formElement.addEventListener('submit', handleFormSubmit); 


// const initialCards =  [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// initialCards.map(function (el) {
//   return el.text;
// });

// initialCards.forEach(function (el) {
//   console.log(el);
// });
