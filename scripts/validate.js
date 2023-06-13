const showInputError = (formElement, inputElement, errorMessage , config ) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.popupValid);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement , config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.popupValid);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement , config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage , config);
  } else {
    hideInputError(formElement, inputElement , config);
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
  disableSubmitButton(buttonElement , config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement , config);
      if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement , config );
      } else {
        enableSubmitButton(buttonElement , config );
      }
    });
  });
};

const disableSubmitButton = (buttonElement , config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

const enableSubmitButton = (buttonElement , config) => {
  buttonElement.classList.remove(config.inactiveButtonClass);
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
  inactiveButtonClass: 'popup-button_inactive',
  inputErrorClass: '.popup__input-error',
  popupValid: 'popup_input-invalid'
});




