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


const newCard =[
  {
    name: '',
    link: ''
  },
]





function openPopupProfile() {
  userName.value = profileTitle.textContent;
  userAbout.value = profileSubtitle.textContent;
  closeOrOpenAnyPopup(editProfile);
};


function handleFormEditProfile(evt) {
 evt.preventDefault();
 profileTitle.textContent = userName.value;
 profileSubtitle.textContent = userAbout.value;
 closeOrOpenAnyPopup(editProfile);
};


function closeOrOpenAnyPopup (popup) {
 popup.classList.toggle('popup_closed');
};

buttonOpenEdit.addEventListener('click', openPopupProfile );
closeEditProfile.addEventListener('click' , function() {closeOrOpenAnyPopup(editProfile)});
popupCloseAdd.addEventListener('click' , function() {closeOrOpenAnyPopup(popupAdd)});
formPopupEdit.addEventListener('submit', handleFormEditProfile); 
buttonOpenAdd.addEventListener('click', function() {closeOrOpenAnyPopup(popupAdd)});
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

function createCard ({ name, link }) {
  const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector('.card__edit-like-button');
  const deleteButton = cardElement.querySelector('.trash');
  const cardImage = cardElement.querySelector('.card__images');

  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__images").src = link;
  cardElement.querySelector(".card__images").alt = name;

  likeButton.addEventListener('click', handleLikeIcon);
  deleteButton.addEventListener('click', handleDeleteCard);
  cardImage.addEventListener('click',  handlePreviewPicture);


  return cardElement;

};


const cardTitle  = namesCards.value;
const cardImages = urlCards.value;

function handleFormSubmitAdd (evt) {
  evt.preventDefault();
  newCard[0].name  = namesCards.value;
  newCard[0].link = urlCards.value;
  namesCards.value = "";
  urlCards.value = "";
  renderCard(newCard[0]);
  closeOrOpenAnyPopup(popupAdd);
}


function handleDeleteCard(){
    const delite = this.closest('.card');
    delite.remove();
}

function handleLikeIcon(){
  const like = this;
  like.classList.toggle('card__darck-like-button');
}


const popupImage = document.querySelector('.popup-image');
const imageClossButton = popupImage.querySelector('.popup__close'); 
const photoPopupImage = popupImage.querySelector('.popup__open'); 
const titlePopupImage = popupImage.querySelector('.popup-image__title-images'); 



function handlePreviewPicture(){
  const open = this.parentElement;
  const omg = open.querySelector(".card__title").textContent;
  const amg = open.querySelector(".card__images").src;
  photoPopupImage.src = amg;
  titlePopupImage.textContent = omg;
  photoPopupImage.alt = omg;
  closeOrOpenAnyPopup(popupImage);
}



imageClossButton.addEventListener("click", function() {closeOrOpenAnyPopup(popupImage)});

renderCard();