const {tokenModel} = require('../../DataBase/models')

class TokenModel {

    saveRefreshToken(info) {
        return tokenModel.create(info)
    }

    deleteTokenByParams(params) {
        return tokenModel.findOneAndDelete(params)
    }

    getRefreshTokenByParams(params) {
        return tokenModel.findOne(params)
    }
}

module.exports = new TokenModel