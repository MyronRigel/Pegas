import {makeAutoObservable} from 'mobx'

export default class CarStore {
    constructor(props) {
        this.cars = []
        makeAutoObservable(this)
    }

    setCars(car) {
        this.cars = car
    }

    getCars() {
        return this.cars
    }

}