const profileEdit = document.querySelector('.profile__edit-button__open');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');

const handleAboutButtonClick = () => {
    popup.classList.add('profile__edit-button')
}

profileEdit.addEventListener('click',handleAboutButtonClick);

