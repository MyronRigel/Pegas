const {ErrorHandler} = require('../../Errors')
const {newCarValidator} = require('../../validators')
const {carService} = require('../../services')
const {ALREADY_EXIST_CAR} = require('../../constants')

module.exports = async (req, res, next) => {
    const {model, yearOfManufacture} = req.body
    const {error} = await newCarValidator.validate(req.body)

    if (error) {
        return next(new ErrorHandler(error.details[0].message, 400, 4001))
    }

    const car = await carService.getCarByParams({model, yearOfManufacture})

    if(car?.model) {
        return next(new ErrorHandler(ALREADY_EXIST_CAR, 400, 4001))
    }


    next()

}