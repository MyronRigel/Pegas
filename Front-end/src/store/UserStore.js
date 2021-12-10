import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor(props) {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(bool) {
        this._user = bool
    }

    getIsAuth() {
        return this._isAuth
    }

    getUser() {
        return this._user
    }

}