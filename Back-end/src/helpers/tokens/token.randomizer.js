const jwt = require('jsonwebtoken')

const {ACCESS_TOKEN_SECRET_WORD, REFRESH_TOKEN_SECRET_WORD} = require('../../constants')

module.exports = (payload) => {
    const access_token = jwt.sign(payload, ACCESS_TOKEN_SECRET_WORD, {expiresIn: '1h'})
    const refresh_token = jwt.sign(payload, REFRESH_TOKEN_SECRET_WORD, {expiresIn: '14d'})

    return {
        access_token,
        refresh_token
    }
}
