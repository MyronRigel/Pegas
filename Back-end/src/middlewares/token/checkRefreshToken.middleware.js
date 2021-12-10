const {checkRefreshToken} = require('../../helpers')
const {ErrorHandler} = require('../../Errors')
const {INVALID_TOKEN, NO_TOKEN} = require('../../constants')

module.exports = (req, res, next) => {
    try {
        const token = req.cookies('refresh_token')
        if (!token) {
            return next(new ErrorHandler(NO_TOKEN, 400, 4008))
        }

        const result = checkRefreshToken(token)

        if (!result) {
            return next(new ErrorHandler(INVALID_TOKEN, 400, 4007))
        }
    } catch (e) {
        next(new ErrorHandler(e.message, 400, 4007))
    }

    next()
}