export class UserInfo{ 
	constructor({name, job}){
		this._userNameElement = name
		this._userAboutElement = job
	}

	getUserInfo(){
		this._userData = {}
		this._userData.name = this._userNameElement.textContent
		this._userData.job = this._userAboutElement.textContent
		return this._userData
	}

	setUserInfo(item){
		if (item.name){
			this._userNameElement.textContent = item.name
		}
		if (item.job){ 
			this._userAboutElement.textContent = item.job
		}
	}
}