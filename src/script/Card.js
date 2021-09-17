export class Card {

	constructor(name,link,placesTemplate,handleCardClick){
		this._name = name
		this._link = link
		this._placesTemplate = placesTemplate
		this._handleCardClick = handleCardClick
	}

	getCard(){
		this._cardTemplate = document.querySelector(this._placesTemplate).content
		this._newCard = this._cardTemplate.querySelector('.card').cloneNode(true)
		return this._newCard
	}

	_setEventListeners() {
		this._cardText = this._newCard.querySelector('.card__title')
		this._cardImage = this._newCard.querySelector('.card__image')
		this._cardDeleteButton = this._newCard.querySelector('.card__delete-button')
		this._likeButton = this._newCard.querySelector('.card__like-button')

		/*Лайк*/
		this._likeButton.addEventListener('click', () =>{
			this._likeButton.classList.toggle('card__like-button_active')
		})
		/*Удаление карточки*/
		this._cardDeleteButton.addEventListener('click', function (evt){
			const evtTarget = evt.target
			evtTarget.closest('.card').remove()
		})
		/*Открытие Card*/
		this._cardImage.addEventListener("click", () =>{
			this._handleCardClick(this._name, this._link)
		})
	}
	
	generateCard() {
		this._element = this.getCard()

		this._setEventListeners()

		this._cardText.textContent = this._name
		this._cardImage.src = this._link
		this._cardImage.alt = this._name

		return this._element
	}
}