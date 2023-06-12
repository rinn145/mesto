const popupContainer = document.querySelector('.popup__container');
const editProfile = document.querySelector('.popup-edit');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const formPopupAdd = popupAdd.querySelector('.popup__form')
const closeEditProfile = editProfile.querySelector('.popup__close');
const userName = document.querySelector('#name-input');
const userAbout = document.querySelector('#about-input');
const namesCards = document.querySelector('#namesCards-input');
const urlCards = document.querySelector('#url-input');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')
const formPopupEdit = document.querySelector('.popup__form');
const popupCloseAdd = popupAdd.querySelector('.popup__close');
const allPopups = document.querySelectorAll('.popup');


const closePopupByOverlayClick = evt => {
  if (evt.target.classList.contains('popup')) {
    closeAnyPopup(evt.currentTarget);
 }
}


const closePopupByEsc = evt => {
  const openPopup = document.querySelector('.popup_closed')
  if(event.key == "Escape"){ 
    closeAnyPopup(openPopup);
  }
}

allPopups.forEach (elem => elem.addEventListener('click' , closePopupByOverlayClick));

function exitNoPopup(props) {
    const openPopup = props.querySelector('.popup__container');
    const click = event.composedPath().includes(openPopup);
    if (!click ) {
      props.classList.remove('popup_closed');
    }
}


function openPopupProfile() {
  userName.value = profileTitle.textContent;
  userAbout.value = profileSubtitle.textContent;
  openAnyPopup(editProfile);
};


function handleFormEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = userName.value;
  profileSubtitle.textContent = userAbout.value;
  closeAnyPopup(editProfile);
};


function openAnyPopup(popup) {
  popup.classList.add('popup_closed');
  document.addEventListener('keydown', closePopupByEsc)
};

function closeAnyPopup(popup) {
  popup.classList.remove('popup_closed');
  document.removeEventListener('keydown', closePopupByEsc)
};

buttonOpenEdit.addEventListener('click', openPopupProfile);
closeEditProfile.addEventListener('click', function () { closeAnyPopup(editProfile) });
popupCloseAdd.addEventListener('click', function () { closeAnyPopup(popupAdd) });
formPopupEdit.addEventListener('submit', handleFormEditProfile);
buttonOpenAdd.addEventListener('click', function () { openAnyPopup(popupAdd) });
formPopupAdd.addEventListener('submit', handleFormSubmitAdd);


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


//rendercard

const cardsContainer = document.querySelector(".cards");
const cardsTemplate = document.querySelector(".cards__template").content;



const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function renderCard(data) {
  cardsContainer.prepend(createCard(data));
}

initialCards.forEach(item => renderCard(item));

function createCard({ name, link }) {
  const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector('.card__edit-like-button');
  const deleteButton = cardElement.querySelector('.trash');
  const cardImage = cardElement.querySelector('.card__images');

  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__images").src = link;
  cardElement.querySelector(".card__images").alt = name;

  likeButton.addEventListener('click', handleLikeIcon);
  deleteButton.addEventListener('click', handleDeleteCard);
  cardImage.addEventListener('click', handlePreviewPicture);


  return cardElement;

};


const cardTitle = namesCards.value;
const cardImages = urlCards.value;

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const newCard = {
    name: namesCards.value,
    link: urlCards.value
}
  namesCards.value = "";
  urlCards.value = "";
  renderCard(newCard);
  closeAnyPopup(popupAdd);
}


function handleDeleteCard() {
  const delite = this.closest('.card');
  delite.remove();
}

function handleLikeIcon() {
  const like = this;
  like.classList.toggle('card__darck-like-button');
}


const popupImage = document.querySelector('.popup-image');
const imageClossButton = popupImage.querySelector('.popup__close');
const photoPopupImage = popupImage.querySelector('.popup__open');
const titlePopupImage = popupImage.querySelector('.popup-image__title-images');





function handlePreviewPicture(evt) {
  photoPopupImage.src = evt.target.src; 
  titlePopupImage.textContent = evt.target.alt; 
  photoPopupImage.alt = evt.target.alt; 
  openAnyPopup(popupImage);
}


imageClossButton.addEventListener("click", function () { closeAnyPopup(popupImage) });

renderCard();