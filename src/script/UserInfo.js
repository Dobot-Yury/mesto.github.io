export class UserInfo{
	constructor(userNameElement, userAboutElement){
		this._userNameElement = userNameElement
		this._userAboutElement = userAboutElement
		this._profileName = document.querySelector('.profile__title')
		this._profileJob = document.querySelector('.profile__subtitle')
	}
	getUserInfo(){
		this._userData = {}
		this._userData.name = this._profileName.textContent
		this._userData.job = this._profileJob.textContent
		return this._userData
	}
	SetuserInfo(item){
		if (item.name){
			this._profileName.textContent = item.name
		}
		if (item.job){
			this._profileJob.textContent = item.job
		}
	}
}