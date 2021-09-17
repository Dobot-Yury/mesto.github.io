export class Popup{
	constructor(popupSelector){
		this._popupSelector = popupSelector
		this._handleEscClose = this._handleEscClose.bind(this)
	}

	_handleEscClose(evt){
		if (evt.key === 'Escape'){
			this.close()
		}
	}

	_handleOverlayClose(evt){
		if (evt.target.classList.contains('popup_is-opened')){
			this.close()
		}
	}

	open(){
		this._popupSelector.classList.add('popup_is-opened')
		document.addEventListener('keydown', this._handleEscClose)
	}

	close(){
		this._popupSelector.classList.remove('popup_is-opened')
		document.removeEventListener('keydown', this._handleEscClose)	
	}

	setEventListeners(){
		this._popupSelector.querySelector('.popup__exit')
		.addEventListener('click', () => this.close())
		this._popupSelector.addEventListener('click', this._handleOverlayClose.bind(this))
	}
}