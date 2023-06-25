import { openAnyPopup } from './index.js';
import { closeAnyPopup } from './index.js';



export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._popupImage = document.querySelector('.popup-image');
        this._imageClossButton = this._popupImage.querySelector('.popup__close');
        this._photoPopupImage = this._popupImage.querySelector('.popup__open');
        this._titlePopupImage = this._popupImage.querySelector('.popup-image__title-images');
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }
    _setEventListeners() {
        this._likeButton = this._element.querySelector('.card__edit-like-button');
        this._deleteButton = this._element.querySelector('.trash');
        this._cardImage = this._element.querySelector('.card__images');
        this._imageClossButton.addEventListener("click", () => { closeAnyPopup(this._popupImage) });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeIcon();
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._cardImage.addEventListener('click', () => {
            this._handlePreviewPicture();
        });

    }

    _handleLikeIcon() {
        this._likeButton.classList.toggle('card__darck-like-button');
    }

    _handleDeleteCard() {
        this._element.remove();
    }

    _handlePreviewPicture() {
        this._photoPopupImage.src = this._link;
        this._titlePopupImage.textContent = this._name;
        this._photoPopupImage.alt = this._name;
        openAnyPopup(this._popupImage);
    }



    createCard() {
        this._element = this._getTemplate();
        const cardImage = this._element.querySelector('.card__images');
        const cardTitle = this._element.querySelector(".card__title");

        cardTitle.textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;

        this._setEventListeners();

        return this._element;
    }
}

const cardsContainer = document.querySelector(".cards");
const cardsTemplate = ".cards__template";

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


function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    const newCard = {
        name: namesCards.value,
        link: urlCards.value
    };
    
    evt.target.reset();


    const cardElement = createCard(newCard);
    cardsContainer.prepend(cardElement);

    closeAnyPopup(popupAdd);
}

initialCards.forEach((item) => {
    const cardElement = createCard(item);
    cardsContainer.prepend(cardElement);
});

const popupAdd = document.querySelector('.popup-add');
const formPopupAdd = popupAdd.querySelector('.popup__form')

const urlCards = document.querySelector('#url-input');
const namesCards = document.querySelector('#namesCards-input');

function createCard(item) {
    const card = new Card(item, cardsTemplate);
    const cardElement = card.createCard();
    return cardElement
}

formPopupAdd.addEventListener('submit', handleFormSubmitAdd);
