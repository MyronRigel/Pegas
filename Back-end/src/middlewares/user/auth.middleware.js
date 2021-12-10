const {userService} = require('../../services')
const {ErrorHandler} = require('../../Errors')
const {USER_DONT_EXIST, WRONG_EMAIL_OR_PASSWORD} = require('../../constants')
const {checkHashedPassword} = require('../../helpers')

module.exports = async (req, res, next) => {
    const {email, password} = req.body
    const user = await userService.getUserByParams({email})

    if (!user) {
        return next(new ErrorHandler(USER_DONT_EXIST, 404, 4003))
    }

    const result = await checkHashedPassword(password, user.password)
    if (!result) {
        return next(new ErrorHandler(WRONG_EMAIL_OR_PASSWORD, 400, 4003))
    }

    req.user = user
    next()
}