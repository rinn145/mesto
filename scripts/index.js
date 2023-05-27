const popup = document.querySelector('.popup');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupAdd = document.querySelector('.popup-add');
const buttonAdd = document.querySelector('.profile__add-button');
const closeButton = popup.querySelector('.popup__close');
const closeAddButton = popupAdd.querySelector('.popup-add__close');
let userName = document.querySelector('#name-input');
let userAbout = document.querySelector('#about-input');
let namesCards = document.querySelector('#namesCards-input');
let urlCards = document.querySelector('#url-input');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle')
let formElement = document.querySelector('.popup__form');
let formElementAdd = document.querySelector('.popup-add__form');


const toggleOpenPopup = function () {
   userName.value = profileTitle.textContent;
   userAbout.value = profileSubtitle.textContent;
   popup.classList.toggle('popup_opened')
};

const toggleClosePopup = function () {
   popup.classList.toggle('popup_opened');
};


function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = userName.value;
  profileSubtitle.textContent = userAbout.value;
  toggleClosePopup()
};

const toggleAddPopup = function () {
  popupAdd.classList.toggle('popup-add_opened')
};

const toggleAddClose = function () {
   popupAdd.classList.toggle('popup-add_opened');
};

const newCard =[
  {
    name: '',
    link: ''
  },
]


let cardTitle  = namesCards.value;
let cardImages = urlCards.value;

function handleFormSubmitAdd (evt) {
  evt.preventDefault();
  newCard[0].name  = namesCards.value;
  newCard[0].link = urlCards.value;
  renderCard(newCard[0]);
  toggleAddClose();
}


buttonAdd.addEventListener('click', toggleAddPopup);
buttonOpenEdit.addEventListener('click', toggleOpenPopup);
closeButton.addEventListener("click", toggleClosePopup);
closeAddButton.addEventListener("click", toggleAddClose);
formElement.addEventListener('submit', handleFormSubmit); 
formElementAdd.addEventListener('submit', handleFormSubmitAdd); 

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



const cardsContainer = document.querySelector(".cards");
const cardsTemplate = document.querySelector(".cards__template").content;
let likeButton = document.querySelectorAll(".card__edit-like-button");
let trashButton = document.querySelectorAll(".trash");


const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__images").src = link;
  cardsContainer.prepend(cardElement);

  likeButton = document.querySelectorAll(".card__edit-like-button");
  likeButton.forEach((heart) => { 
    heart.addEventListener('click', likeCards) 
  });  
  trashButton = document.querySelectorAll(".trash");
  trashButton.forEach((elem)=>{
    elem.addEventListener('click', deliteParent);
  });
  imageButton = document.querySelectorAll(".card__images");
  imageButton.forEach((elem)=>{
    elem.addEventListener('click', imageOpen);
  });
}

render();

function deliteParent(){
    let delite = this.parentElement;
    delite.remove();
}

function likeCards(){
  let like = this;
  like.classList.toggle('card__darck-like-button');
}

let popupImage = document.querySelector('.popup-image');
let imageClossButton = popupImage.querySelector('.popup-image__close-images');
let popupImages = popupImage.querySelector('.popup-image__open-images');

let popupTitle = popupImage.querySelector('.popup-image__title-images');

function imageOpen(){
  let open = this.parentElement;
  let omg = open.querySelector(".card__title").textContent;
  let amg = open.querySelector(".card__images").src;
  popupImages.src = amg;
  popupTitle.textContent = omg;
  popupImage.classList.toggle('popup-image__opened-images');
}



const toggleImageClose = function () {
  popupImage.classList.toggle('popup-image__opened-images');
};

imageClossButton.addEventListener("click", toggleImageClose);
