export class FormValidator{
	constructor(config, formElement){
		this._formElement = formElement
		this._formSelector = config.formSelector
		this._formElementField = config.formElementField
		this._inputSelector = config.inputSelector
		this._submitButtonSelector = config.submitButtonSelector
		this._inactiveButtonClass = config.inactiveButtonClass
		this._inputErrorClass = config.inputErrorClass
		this._errorClass = config.errorClass

	}

	_checkInputValidity (inputElement) {
		this._isInputNotValid = !inputElement.validity.valid
		if (this._isInputNotValid) {
			this._showInputError(inputElement, inputElement.validationMessage)
			inputElement.classList.add(this._inputErrorClass)
		} else {
			this._hideInputError(inputElement)
			inputElement.classList.remove(this._inputErrorClass)
		}
	}

	_showInputError (inputElement, errorMessage) {
		const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)

		inputElement.classList.add(this._inputErrorClass)
		errorElement.textContent = errorMessage
		errorElement.classList.add(this._errorClass)
	}
	
	_hideInputError (inputElement) {
		const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)

		inputElement.classList.add(this._inputErrorClass)
		errorElement.textContent = ""
		errorElement.classList.remove(this._errorClass)
		
	}

	_toggleButtonState () {
		this._hasNotValidInput = this._inputList.some(
			(inputElement) => !inputElement.validity.valid
		)
		if (this._hasNotValidInput) {
			this._buttonElement.setAttribute("disabled", true)
			this._buttonElement.classList.add(this._inactiveButtonClass)
		} else {
			this._buttonElement.removeAttribute("disabled")
			this._buttonElement.classList.remove(this._inactiveButtonClass)
		}
	}
	
	
	_setEvenListenersValidate () {
		this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))

		this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
	
		this._inputList.forEach ((inputElement) => {
			inputElement.addEventListener("input", () => {
				this._checkInputValidity(inputElement)
				this._toggleButtonState()
			})
		})
	
	}

	resetValidation(){
		this._toggleButtonState()
		this._inputList.forEach((inputElement) => {
			this._hideInputError (inputElement)
		})
	}
	
	enableValidation () {
		this._formElement.addEventListener("submit", (e) => {
			e.preventDefault()
		})
		this._setEvenListenersValidate()
	}
	
}