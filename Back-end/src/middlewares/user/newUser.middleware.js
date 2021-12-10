const {newUserValidator} = require('../../validators')
const {userService} = require('../../services')
const {ErrorHandler} = require('../../Errors')
const {ALREADY_EXIST_USER} = require('../../constants')

module.exports = async (req, res, next) => {
    const {email} = req.body
    const {error} = newUserValidator.validate(req.body)
    if (error) {
        return next(new ErrorHandler(error.details[0].message, 400, 4001))
    }

    const user = await userService.getUserByParams({email})
    if (user?.email) {
        return next(new ErrorHandler(ALREADY_EXIST_USER, 400, 4001))
    }
    next()
}


