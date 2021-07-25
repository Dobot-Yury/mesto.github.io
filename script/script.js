const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupOpenCards = document.querySelector('.profile__add-button')

const popupElement = document.querySelector('.popup')
const popupCards = document.querySelector('.popup_place_cards')
const popupImage = document.querySelector('.popup_card_fullscreen')

const popupCloseButtonElement = popupElement.querySelector('.popup__exit-image')
const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const nameInput = popupElement.querySelector('.popup__input_user_name')
const jobInput = popupElement.querySelector('.popup__input_user_description')
const nameCardInput = popupCards.querySelector('.popup__input_image_name')
const linkInput = popupCards.querySelector('.popup__input_link')

const formElements = document.querySelector('.popup__form')

const cardButtonExit = document.querySelector('.popup__place-exit')
const cardTemplate = document.querySelector('.template').content
const cardCase = document.querySelector('.cards')
const newImageCard = popupCards.querySelector('.popup__input_image_name')
const newLinkCard = popupCards.querySelector('.popup__input_link')
const popupElementAdd = popupCards.querySelector('.popup__card-form')
const cardExit = document.querySelector('.popup__image-exit')
const buttonElements = document.querySelector('.popup__save')
const buttonCards = document.querySelector('.popup__save_card')

const errorElement = document.querySelector('.popup__input-error')


/*открыть и закрыть окно*/

const openPopup = function(selectPopup){
    selectPopup.classList.add('popup_is-opened')
    document.addEventListener('keydown', closeEsc)
}

const closePopup = function(selectPopup){
    selectPopup.classList.remove('popup_is-opened')
}

const closePopupByClickOnOverlay = function(event) {
    if (event.target !== event.currentTarget){
        return
    }
    closePopup(event.currentTarget)
}

function openPropfilePopup() {
    openPopup(popupElement)
    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
    buttonElements.classList.add("popup__save_disabled")
    checkInputValidity(formElements,nameInput)
    checkInputValidity(formElements,jobInput)
}

function openCardPopup() {
    openPopup(popupCards)
    buttonCards.classList.add("popup__save_disabled")
    newLinkCard.value = ""
    newImageCard.value = ""
}

function closeCardPopup() {
    closePopup(popupCards)
    hideInputError(newLinkCard)
    hideInputError(newImageCard)
} 
/*Закрытие ESC*/

const closeEsc = (evt) => {
    if(evt.key === 'Escape'){
        const oponedPopup = document.querySelector('.popup_is-opened')
        closePopup(oponedPopup)
    }
}

/*Изменение имени и описания*/

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    closePopup(popupElement)
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
    const popupNameCard = newImageCard.value
    const popupLinkCard = newLinkCard.value
    cardCase.prepend(getCard(popupNameCard, popupLinkCard))
    newLinkCard.value = ""
    newImageCard.value = ""
    closePopup(popupCards)
}

popupOpenButtonElement.addEventListener('click', openPropfilePopup)
popupOpenCards.addEventListener('click', openCardPopup)
cardButtonExit.addEventListener('click', closeCardPopup)
cardExit.addEventListener('click', () => closePopup(popupImage))
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement))
popupElement.addEventListener('click', closePopupByClickOnOverlay)
popupCards.addEventListener('click', closePopupByClickOnOverlay)
popupImage.addEventListener('click', closePopupByClickOnOverlay)
popupElementAdd.addEventListener('submit', addNewCard)
formElements.addEventListener('submit',formSubmitHandler)