export class Popup{
	constructor(popup){
		this._popup = popup
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
		this._popup.classList.add('popup_is-opened')
		document.addEventListener('keydown', this._handleEscClose)
	}

	close(){
		this._popup.classList.remove('popup_is-opened')
		document.removeEventListener('keydown', this._handleEscClose)	
	}

	setEventListeners(){
		this._popup.querySelector('.popup__exit')
		.addEventListener('click', () => this.close())
		this._popup.addEventListener('click', this._handleOverlayClose.bind(this))
	}
}