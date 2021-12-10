const {checkAccessToken} = require('../../helpers')
const {ErrorHandler} = require('../../Errors')
const {INVALID_TOKEN, NO_TOKEN} = require('../../constants')

module.exports = (req, res, next) => {
    try {
        if (req.method === 'OPTIONS') {
            next()
        }
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) {
            return next(new ErrorHandler(NO_TOKEN, 401, 4008))
        }

        const access_token = authorizationHeader.split(' ')[1]

        if (!access_token) {
            return next(new ErrorHandler(NO_TOKEN, 401, 4007))
        }

        const result = checkAccessToken(access_token)


        if (!result) {
            return next(new ErrorHandler(INVALID_TOKEN, 401, 4007))
        }


        req.user = result
    } catch (e) {
        next(new ErrorHandler(e.message, 401, 4007))
    }


    next()
}