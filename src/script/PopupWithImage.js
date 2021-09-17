import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
	constructor(popupSelector){
		super(popupSelector)
		this._name = document.querySelector('.popup__title-fullscreen')
		this._link = document.querySelector('.popup__image-fullscreen')
	}
	open(name, link){
		super.open()
		this._link.src = link
		this._link.alt = name
		this._name.textContent = name
	}
}