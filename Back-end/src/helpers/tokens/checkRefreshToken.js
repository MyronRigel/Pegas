const jwt = require('jsonwebtoken')

const {REFRESH_TOKEN_SECRET_WORD} = require('../../constants')

module.exports = (token) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET_WORD)
}