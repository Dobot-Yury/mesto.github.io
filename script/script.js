const popupProfile = document.querySelector('.popup_place_profile')
const popupCards = document.querySelector('.popup_place_cards')
const popupImage = document.querySelector('.popup_card_fullscreen')

const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupOpenButtonCards = document.querySelector('.profile__add-button')
const popupCloseButtonElement = popupProfile.querySelector('.popup__profile-exit')
const popupCloseButtonCards = popupCards.querySelector('.popup__card-exit')
const popupCloseButtonImages = popupImage.querySelector('.popup__image-exit')

const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const nameInputProfile = popupProfile.querySelector('.popup__input_user_name')
const jobInputProfile = popupProfile.querySelector('.popup__input_user_description')
const imageInputCard = popupCards.querySelector('.popup__input_image_name')
const linkInputCard = popupCards.querySelector('.popup__input_link')

const formPopupProfile = popupProfile.querySelector('.popup__profile-form')
const formPopupCard = popupCards.querySelector('.popup__card-form')

const cardTemplate = document.querySelector('.template').content
const cardCase = document.querySelector('.cards')

const buttonSubmitFormProfile = popupProfile.querySelector('.popup__save_profile')
const buttonSubmitFormCard = popupCards.querySelector('.popup__save_card')

/*открыть и закрыть окно*/

const openPopup = function(selectPopup){
    selectPopup.classList.add('popup_is-opened')
    document.addEventListener('keydown', closeEsc)
}

const closePopup = function(selectPopup){
    selectPopup.classList.remove('popup_is-opened')
    document.removeEventListener('keydown', closeEsc)
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
    buttonSubmitFormProfile.classList.add("popup__save_disabled")
    checkInputValidity(formPopupProfile,nameInputProfile)
    checkInputValidity(formPopupProfile,jobInputProfile)
}

function openCardPopup() {
    openPopup(popupCards)
    buttonSubmitFormCard.classList.add("popup__save_disabled")
    imageInputCard.value = ""
    linkInputCard.value = ""
}

function closeCardPopup() {
    closePopup(popupCards)
    hideInputError(imageInputCard)
    hideInputError(linkInputCard)
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

/*Карточки*/


function getCard(name, link){
    const selectCard = document.querySelector('.popup__image-fullscreen')
    const cardNewText = document.querySelector('.popup__title-fullscreen')
    const createCard = cardTemplate.querySelector('.card').cloneNode(true)
    const cardText = createCard.querySelector('.card__title')
    const cardImage = createCard.querySelector('.card__image')
    cardText.textContent = name
    cardImage.src = link
    cardImage.alt = name
    /*Лайк*/
    createCard.querySelector('.card__like-button').addEventListener('click', (evt) =>{
        evt.target.classList.toggle('card__like-button_active')
    })
    /*Удаление карточки*/
    createCard.querySelector('.card__delete-button').addEventListener('click', (evt) =>{
        evt.target.closest('.card').remove()
    })

    function view(){
        openPopup(popupImage)
        selectCard.src = link
        selectCard.alt = name
        cardNewText.textContent = name
    }

    cardImage.addEventListener('click', view)

    return createCard
}

initialCards.forEach(function(el){
    cardCase.append(getCard(el.name, el.link))
})

/*Добавление карточки*/
const addNewCard = function(evt){
    evt.preventDefault()
    const popupNameCard = imageInputCard.value
    const popupLinkCard = linkInputCard.value
    cardCase.prepend(getCard(popupNameCard, popupLinkCard))
    imageInputCard.value = ""
    linkInputCard.value = ""
    closePopup(popupCards)
}

popupOpenButtonElement.addEventListener('click', openPropfilePopup)
popupOpenButtonCards.addEventListener('click', openCardPopup)
popupCloseButtonCards.addEventListener('click', closeCardPopup)
popupCloseButtonImages.addEventListener('click', () => closePopup(popupImage))
popupCloseButtonElement.addEventListener('click', () => closePopup(popupProfile))
popupProfile.addEventListener('click', closePopupByClickOnOverlay)
popupCards.addEventListener('click', closePopupByClickOnOverlay)
popupImage.addEventListener('click', closePopupByClickOnOverlay)
formPopupCard.addEventListener('submit', addNewCard)
formPopupProfile.addEventListener('submit', submitFormProfile)