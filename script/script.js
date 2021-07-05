/*открыть и закрыть окно*/

const popupOpenButtonElement = document.querySelector('.profile__edit-button')

const popupElement = document.querySelector('.popup')

const popupCloseButtonElement = popupElement.querySelector('.popup__exit')

console.log({popupElement, popupOpenButtonElement, popupCloseButtonElement})

const openPopup = function(){
    popupElement.classList.add('popup_is-opened')

    nameInput.value = profileName.textContent

    jobInput.value = profileJob.textContent
}

const closePopup = function(){
    popupElement.classList.remove('popup_is-opened')
}

popupOpenButtonElement.addEventListener('click', openPopup)

popupCloseButtonElement.addEventListener('click', closePopup)

/*Изменение имени и описания*/

const profileName = document.querySelector('.profile__title')

const profileJob = document.querySelector('.profile__subtitle')

const nameInput = popupElement.querySelector('.popup__user-name')

const jobInput = popupElement.querySelector('.popup__user-description')

const saveElement = popupElement.querySelector('.popup__save')

const formElement = document.querySelector('.popup__form')

function formSubmitHandler (evt) {
    evt.preventDefault()

    profileName.textContent = nameInput.value

    profileJob.textContent = jobInput.value

    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler)