import { openPopup } from "./index.js"
export class Card {

    constructor(name, link, template){
        this._name = name
        this._link = link
        this._template = template
    }

    getCard(){
        this._cardTemplate = document.querySelector(this._template).content
        this._newCard = this._cardTemplate.querySelector('.card').cloneNode(true)
        return this._newCard
    }

    _setEventListeners() {
        this._cardText = this._newCard.querySelector('.card__title')
        this._cardImage = this._newCard.querySelector('.card__image')
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button')
        this._likeButton = this._newCard.querySelector('.card__like-button')
        this._popupPlace = document.querySelector('.popup_card_fullscreen')
        this._popupPlaceImage = this._popupPlace.querySelector('.popup__image-fullscreen')
        this._popupPlaceTitle = this._popupPlace.querySelector('.popup__title-fullscreen')
        
        this._popupPlaceImage.src = this._link
        this._popupPlaceImage.alt = this._name
        this._popupPlaceTitle.textContent = this._name

        this._cardText.textContent = this._name
        this._cardImage.src = this._link
        this._cardImage.alt = this._name

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
    }
    
    generateCard() {
        this._element = this.getCard()
    
        this._setEventListeners()
    
        this._element.querySelector('.card__image').scr = this._link
        this._element.querySelector('.card__title').textContent = this._title
        this._element.addEventListener('click', openPopup(this._popupPlace))
    
        return this._element
    }
}