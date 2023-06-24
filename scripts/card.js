import { openAnyPopup } from './index.js';
import { closeAnyPopup } from './index.js';



export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
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
        const likeButton = this._element.querySelector('.card__edit-like-button');
        const deleteButton = this._element.querySelector('.trash');
        const cardImage = this._element.querySelector('.card__images');

        likeButton.addEventListener('click', () => {
            this._handleLikeIcon();
        });

        deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        cardImage.addEventListener('click', () => {
            this._handlePreviewPicture();
        });

    }

    _handleLikeIcon() {
        const like = this._element.querySelector('.card__edit-like-button');
        like.classList.toggle('card__darck-like-button');
    }

    _handleDeleteCard() {
        this._element.remove();
    }

    _handlePreviewPicture() {
        const popupImage = document.querySelector('.popup-image');
        const imageClossButton = popupImage.querySelector('.popup__close');
        const photoPopupImage = popupImage.querySelector('.popup__open');
        const titlePopupImage = popupImage.querySelector('.popup-image__title-images');

        imageClossButton.addEventListener("click", function () { closeAnyPopup(popupImage)});
        photoPopupImage.src = this._link;
        titlePopupImage.textContent = this._name;
        photoPopupImage.alt = this._name;
        openAnyPopup(popupImage);
        
    }
        


    createCard() {
        this._element = this._getTemplate();
        const likeButton = this._element.querySelector('.card__edit-like-button');
        const deleteButton = this._element.querySelector('.trash');
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

initialCards.forEach((item) => {
    const card = new Card(item, cardsTemplate);
    const cardElement = card.createCard();
    cardsContainer.prepend(cardElement);
});

const popupAdd = document.querySelector('.popup-add');
const formPopupAdd = popupAdd.querySelector('.popup__form')

const urlCards = document.querySelector('#url-input');
const namesCards = document.querySelector('#namesCards-input');

const cardTitle = namesCards.value;
const cardImages = urlCards.value;

function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    const newCard = {
        name: namesCards.value,
        link: urlCards.value
    };
    namesCards.value = "";
    urlCards.value = "";

    const card = new Card(newCard, cardsTemplate);
    const cardElement = card.createCard();
    cardsContainer.prepend(cardElement);

    closeAnyPopup(popupAdd);
}

formPopupAdd.addEventListener('submit', handleFormSubmitAdd);
;
