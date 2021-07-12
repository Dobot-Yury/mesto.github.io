const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__exit')
const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const nameInput = popupElement.querySelector('.popup__input_user_name')
const jobInput = popupElement.querySelector('.popup__input_user_description')
const formElement = document.querySelector('.popup__form')

/*открыть и закрыть окно*/

const openPopup = function(){
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
    popupElement.classList.add('popup_is-opened')
}

const closePopup = function(){
    popupElement.classList.remove('popup_is-opened')
}

/*Изменение имени и описания*/

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    closePopup()
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler)