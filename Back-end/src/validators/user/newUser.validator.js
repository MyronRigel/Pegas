const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    surname: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().trim().min(6).required()
})
