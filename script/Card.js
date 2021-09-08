export class Card{

    constructor(name, link, template){
        this._name = name
        this._link = link
        this._template = template
    }

    getCard(){
        this._cardTemplate = document.querySelector(this._template).content
        return this._cardTemplate.querSelector('.card').cloneNode(true)
    }

    _setEventListeners() {
        this._cardText = this._newCard.querySelector('.card__title')
        this._cardImage = this._newCard.querySelector('.card__image')
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button')
        this._likeButton = this._newCard.querySelector('.card__like-button')
        
        
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
        this._cardImage.addEventListener('click', openImagePopup)
        
        return newCard
    }
    
    generateCard() {
        this._element = this._getCard()
    
        this._setEventListeners()
    
        this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`
        this._element.querySelector('.card__title').textContent = this._title
    
        return this._element
    }
}