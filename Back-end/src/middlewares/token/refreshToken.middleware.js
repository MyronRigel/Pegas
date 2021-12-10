const {tokenService} = require('../../services')
const {ErrorHandler} = require('../../Errors')

module.exports = async (req, res, next) => {
    const {_id} = req.user

    const tokenFromDB = await tokenService.getRefreshTokenByParams({userId: _id})

    if (tokenFromDB) {
        await tokenService.deleteTokenByParams({userId: _id})
    }


    next()
}