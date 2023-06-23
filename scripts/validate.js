class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._popupValid = config.popupValid;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${ inputElement.id } - error`);
    inputElement.classList.add(this._popupValid);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${ inputElement.id } - error`);
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

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableSubmitButton() {
    this._submitButtonElement.classList.add(this._inactiveButtonClass);
    this._submitButtonElement.disabled = true;
  }

  _enableSubmitButton() {
    this._submitButtonElement.classList.remove(this._inactiveButtonClass);
    this._submitButtonElement.disabled = false;
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._disableSubmitButton();


    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        if (this._hasInvalidInput(inputList)) {
          this._disableSubmitButton();
        } else {
          this._enableSubmitButton();
        }
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

const formList = document.querySelectorAll('.popup__form');
formList.forEach((formElement) => {
  const formValidator = new FormValidator({
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup-button_inactive',
    inputErrorClass: '.popup__input-error',
    popupValid: 'popup_input-invalid'
  }, formElement);
  formValidator.enableValidation();
});