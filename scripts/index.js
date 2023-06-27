const popupContainer = document.querySelector('.popup__container');
const editProfile = document.querySelector('.popup-edit');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const closeEditProfile = editProfile.querySelector('.popup__close');
const userName = document.querySelector('#name-input');
const userAbout = document.querySelector('#about-input');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')
const formPopupEdit = document.querySelector('.popup__form');
const popupCloseAdd = popupAdd.querySelector('.popup__close');
const allPopups = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup-image');
const popupCloseImage = popupImage.querySelector('.popup__close');


const closePopupByOverlayClick = evt => {
  if (evt.target.classList.contains('popup')) {
    closeAnyPopup(evt.currentTarget);
 }
}

const closePopupByEsc = evt => {
  if(evt.key == "Escape"){
  const openPopup = document.querySelector('.popup_closed');
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



export function openAnyPopup(popup) {
  popup.classList.add('popup_closed');
  document.addEventListener('keydown', closePopupByEsc);

}

export function closeAnyPopup(popup) {
  popup.classList.remove('popup_closed');
  document.removeEventListener('keydown', closePopupByEsc);
}

function createCard(item) {
  const card = new Card(item, cardsTemplate, closeAnyPopup);
  const cardElement = card.createCard();
  return cardElement
}


buttonOpenEdit.addEventListener('click', openPopupProfile);
closeEditProfile.addEventListener('click', function () { closeAnyPopup(editProfile) });
popupCloseAdd.addEventListener('click', function () { closeAnyPopup(popupAdd) });
formPopupEdit.addEventListener('submit', handleFormEditProfile);
buttonOpenAdd.addEventListener('click', function () { openAnyPopup(popupAdd)});
popupCloseImage.addEventListener('click', function() { closeAnyPopup(popupImage)});