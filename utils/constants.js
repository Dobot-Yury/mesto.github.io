const popupProfile = document.querySelector('.popup_place_profile')
const popupCards = document.querySelector('.popup_place_cards')
const popupImage = document.querySelector('.popup_card_fullscreen')
const placesTemplate = '.template'

const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupOpenButtonCards = document.querySelector('.profile__add-button')

const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const formPopupProfile = document.querySelector('.popup__profile-form')
const formPopupCard = popupCards.querySelector('.popup__card-form')
const cardCase = document.querySelector('.cards')

const nameInputProfile = formPopupProfile.querySelector(".popup__input_user_name")
const jobInputProfile = formPopupProfile.querySelector(".popup__input_user_description")

const config = {
	formSelector: '.popup__form',
	formElementField: '.popup__form-field',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save',
	inactiveButtonClass: 'popup__save_disabled',
	inputErrorClass: 'popup__input-error',
	errorClass: 'popup__input-error_active'
}

export{
	popupProfile,
	popupCards,
	popupImage,
	placesTemplate,
	popupOpenButtonElement,
	popupOpenButtonCards,
	profileName,
	profileJob,
	formPopupProfile,
	formPopupCard,
	cardCase,
	nameInputProfile,
	jobInputProfile,
	config,
}