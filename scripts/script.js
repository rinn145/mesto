const aboutButton = document.querySelector(".popup__type_profile");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close");

const toggleOpenPopup = () => {
    popup.classList.toggle("popup_opened");
};

const handleAboutButtonClick = () => {
    toggleOpenPopup();
};

const handleCloseButtonClick = () => {
    toggleOpenPopup();
};

const handleOverlyClick = (event) => {
    if (event.target === event.currentTarget) {
        toggleOpenPopup();
    }
};


aboutButton.addEventListener("click", handleAboutButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
popup.addEventListener("click", handleOverlyClick);

