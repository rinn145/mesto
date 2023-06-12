const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup_input-invalid')
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup_input-invalid')
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  disableSubmitButton(buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement);
      } else {
        enableSubmitButton(buttonElement);
      }
    });
  });
};

const disableSubmitButton = (buttonElement) => {
  buttonElement.classList.add('popup-button_inactive');
  buttonElement.removeAttribute("disabled", 'disabled');
  buttonElement.disabled = true;
}

const enableSubmitButton = (buttonElement) => {
  buttonElement.classList.remove('popup-button_inactive');
  buttonElement.setAttribute("disabled", 'disabled');
  buttonElement.disabled = false;
}


const enableValidation = config => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
    setEventListeners(formElement, config);
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: '.popup-button_inactive',
  inputErrorClass: '.popup__input-error',
});




