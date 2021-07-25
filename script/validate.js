const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)

    errorElement.textContent = errorMessage
    errorElement.classList.add('popup__input-error_active')
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)

    errorElement.textContent = ""
    errorElement.classList.remove('popup__input-error_active')
}

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage

        showInputError(formElement, inputElement, errorMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
}

const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(
        (inputElement) => !inputElement.validity.valid
    )

    if (hasNotValidInput) {
        buttonElement.setAttribute("disabled", true)
        buttonElement.classList.add("popup__save_disabled")
    } else {
        buttonElement.removeAttribute("disabled")
        buttonElement.classList.remove("popup__save_disabled")
    }
}

const setEvenListenersValidate = (formElement, inputSelector, submitButtonSelector) => {
    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault()
    })

    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const buttonElement = formElement.querySelector(submitButtonSelector)

    inputList.forEach((inputElement) =>{
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement)
            toggleButtonState(inputList, buttonElement)
        })
    })
    toggleButtonState(inputList, buttonElement)
}

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector}) => {
    const formList = Array.from(document.querySelectorAll(formSelector))

    formList.forEach((formElement) => {
        setEvenListenersValidate(formElement, inputSelector, submitButtonSelector)
    })
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save'
})