import { closeAnyPopup } from './index.js';
import { openAnyPopup } from './index.js';

class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._popupValid = config.popupValid;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._setEventListeners();
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._popupValid);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._popupValid);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _setEventListeners() {
    this._disableSubmitButton();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        if (this._hasInvalidInput()) {
          this._disableSubmitButton();
        } else {
          this._enableSubmitButton();
        }
      });
    });
  }

  resetFormValidity() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      inputElement.value = ''; 
    });
    this._disableSubmitButton();
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}

const form1 = document.querySelector('.popup__form');
const formValidator1 = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup-button_inactive',
  inputErrorClass: 'popup__input-error',
  popupValid: 'popup_input-invalid'
}, form1);

const popupAdd = document.querySelector('.popup-add');
const form2 = popupAdd.querySelector('.popup__form');
const formValidator2 = new FormValidator({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup-button_inactive',
  inputErrorClass: 'popup__input-error',
  popupValid: 'popup_input-invalid'
}, form2);

const popupCloseAdd = popupAdd.querySelector('.popup__close');
const buttonOpenAdd = document.querySelector('.profile__add-button');

const openPopupAdd = () => {
  openAnyPopup(popupAdd);
  formValidator2.resetFormValidity();
};

popupCloseAdd.addEventListener('click', function () {
  closeAnyPopup(popupAdd);
  formValidator2.resetFormValidity();
});

buttonOpenAdd.addEventListener('click', openPopupAdd);

formValidator1.enableValidation();
formValidator2.enableValidation();