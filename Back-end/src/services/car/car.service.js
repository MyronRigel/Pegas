const {carModel} = require('../../DataBase/models')

class CarService {

    addCar(info) {
        return carModel.create(info)
    }

    getAllCars() {
        return carModel.find()
    }

    getCarByParams(params) {
        return carModel.findOne(params)

    }

    updateCar(params, newInfo) {
        return carModel.findByIdAndUpdate(params, newInfo)
    }
}

module.exports = new CarService