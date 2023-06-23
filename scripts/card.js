export default class Card {
    // конструктор класса
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    // приватный метод получения разметки карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }

    // приватный метод установки слушателей
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

    // приватный метод обработки клика по иконке лайка
    _handleLikeIcon() {
        const like = this._element.querySelector('.card__edit-like-button');
        like.classList.toggle('card__darck-like-button');
    }

    // приватный метод обработки клика по кнопке удаления карточки
    _handleDeleteCard() {
        this._element.remove();
    }

    // приватный метод обработки клика по изображению
    _handlePreviewPicture() {
        const popupImage = document.querySelector('.popup-image');
        const photoPopupImage = popupImage.querySelector('.popup__open');
        const titlePopupImage = popupImage.querySelector('.popup-image__title-images');


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




