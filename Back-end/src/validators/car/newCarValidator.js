const Joi = require('joi')

module.exports = Joi.object().keys({
    model: Joi.string().min(2).max(30).required(),
    price: Joi.number().required(),
    horsePower: Joi.number().integer().required(),
    yearOfManufacture: Joi.number().integer().min(4).required(),
    carType: Joi.string().min(2).max(30).required(),
    maxSpeed: Joi.number().required(),
    acceleration: Joi.number().required(),
    photo: Joi.any()
})
