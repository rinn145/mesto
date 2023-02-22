const popup = document.querySelector(".popup");
const buttonOpenEdit = document.querySelector(".profile__edit-button");
const closeButton = popup.querySelector(".popup__close");
const saveButton = popup.querySelector(".popup__save-button");
const likeButton = document.querySelectorAll(".upload-button__like");



likeButton.forEach(heart => {
   heart.addEventListener('click', () => {
      heart.classList.toggle('added')
   })
});


const toggleOpenPopup = function () {
   popup.classList.toggle('popup_opened')
};

let userName = document.querySelector("#name-input");
let userAbout = document.querySelector("#about-input");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle")

userName.value = profileTitle.textContent;
userAbout.value = profileSubtitle.textContent;

const toggleSavePopup = function () {
   profileTitle.textContent = userName.value;
   profileSubtitle.textContent = userAbout.value;
   popup.classList.toggle('popup_opened')
}

buttonOpenEdit.addEventListener('click', toggleOpenPopup);
closeButton.addEventListener("click", toggleOpenPopup);
saveButton.addEventListener("click", toggleSavePopup);



