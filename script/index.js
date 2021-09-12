import { initialCards } from './initial-сards.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
const popupProfile = document.querySelector('.popup_place_profile')
const popupCards = document.querySelector('.popup_place_cards')
const popupImage = document.querySelector('.popup_card_fullscreen')
const placesTemplate = '.template'

const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupOpenButtonCards = document.querySelector('.profile__add-button')
const popupCloseButtonElement =  document.querySelector('.popup__profile-exit')
const popupCloseButtonCards = popupCards.querySelector('.popup__card-exit')
const popupCloseButtonImages = popupImage.querySelector('.popup__image-exit')

const formPopupProfile = document.querySelector('.popup__profile-form')
const formPopupCard = popupCards.querySelector('.popup__card-form')
const cardCase = document.querySelector('.cards')

const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const nameInputProfile = formPopupProfile.querySelector(".popup__input_user_name")
const jobInputProfile = formPopupProfile.querySelector(".popup__input_user_description")
const imageInputCard = popupCards.querySelector('.popup__input_image_name')
const linkInputCard = popupCards.querySelector('.popup__input_link')

/*открыть и закрыть окно*/

export const openPopup = function(selectPopup){
    selectPopup.classList.add('popup_is-opened')
    document.addEventListener('keydown', closeEsc)
}

const closePopup = function(selectPopup){
    selectPopup.classList.remove('popup_is-opened')
    document.removeEventListener('keydown', closeEsc)
}

function closeCardPopup() {
    closePopup(popupCards)
}

const closePopupByClickOnOverlay = function(event) {
    if (event.target !== event.currentTarget){
        return
    }
    closePopup(event.currentTarget)
    closeCardPopup()
}


function openPropfilePopup() {
    openPopup(popupProfile)
    nameInputProfile.value = profileName.textContent
    jobInputProfile.value = profileJob.textContent
}

function openCardPopup() {
    openPopup(popupCards)
    imageInputCard.value = ""
    linkInputCard.value = ""
}

/*Закрытие ESC*/

const closeEsc = (evt) => {
    if(evt.key === 'Escape'){
        const oponedPopup = document.querySelector('.popup_is-opened')
        closePopup(oponedPopup)
    }
}

/*Изменение имени и описания*/

function submitFormProfile (evt) {
    evt.preventDefault()
    profileName.textContent = nameInputProfile.value
    profileJob.textContent = jobInputProfile.value
    closePopup(popupProfile)
}




/*Добавление карточки*/
const addNewCard = function(evt){
    evt.preventDefault()
    const card = new Card(imageInputCard.value, linkInputCard.value, placesTemplate)
    cardCase.prepend(card.generateCard())
    formPopupCard.reset()
    closePopup(popupCards)
}

initialCards.forEach(function (el) {
    const card = new Card(el.name, el.link, placesTemplate)
    cardCase.append(card.generateCard())
})


const config = {
    formSelector: '.popup__form',
    formElementField: '.popup__form-field',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
}

const formValidatorCard = new FormValidator(config, formPopupCard)
formValidatorCard.enableValidation()

const formValidatorProfile = new FormValidator(config, formPopupProfile )
formValidatorProfile.enableValidation()

popupOpenButtonElement.addEventListener('click', openPropfilePopup)
popupOpenButtonCards.addEventListener('click',openCardPopup)
popupCloseButtonCards.addEventListener('click', closeCardPopup)
popupCloseButtonImages.addEventListener('click', () => closePopup(popupImage))
popupCloseButtonElement.addEventListener('click', () => closePopup(popupProfile))
popupProfile.addEventListener('click', closePopupByClickOnOverlay)
popupCards.addEventListener('click', closePopupByClickOnOverlay)
popupImage.addEventListener('click', closePopupByClickOnOverlay)
formPopupCard.addEventListener('submit', addNewCard)
formPopupProfile.addEventListener('submit', submitFormProfile)