const showInputError = (inputElement, errorMessage) => {
    const formSectionElement = inputElement.closest(".popup__form-field")
    const errorElement = formSectionElement.querySelector(".popup__input-error")

    errorElement.textContent = errorMessage
    errorElement.classList.add('popup__input-error_active')
}

const hideInputError = (inputElement) => {
    const formSectionElement = inputElement.closest(".popup__form-field")
    const errorElement = formSectionElement.querySelector(".popup__input-error")

    errorElement.textContent = ""
    errorElement.classList.remove('popup__input-error_active')
}

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage

        showInputError(inputElement, errorMessage)
    } else {
        hideInputError(inputElement)
    }
}

const toggleButtonState = (inputList, buttonElement, inputElement) => {
    const hasNotValidInput = inputList.some(
        (inputElement) => !inputElement.validity.valid
    )

    if (hasNotValidInput || inputElement === "") {
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

    const inputListIterator = (inputElement) => {
        const hideInputError = (event) => {
            checkInputValidity(formElement, inputElement)
            toggleButtonState(inputList, buttonElement)
        }
    
        inputElement.addEventListener("input", hideInputError)
    }

    inputList.forEach(inputListIterator)
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