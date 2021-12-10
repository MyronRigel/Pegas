const {tokenService} = require('../../services')
const {ErrorHandler} = require('../../Errors')
const {NO_TOKEN} = require('../../constants')

module.exports = async (req, res, next) => {
    const {refresh_token} = req.cookies
    console.log(refresh_token)

    if(!refresh_token) {
       return next()
    }

    await tokenService.deleteTokenByParams({refresh_token})
    res.clearCookie('refresh_token')

    next()
}