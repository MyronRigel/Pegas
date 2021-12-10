const jwt = require('jsonwebtoken')

const {ACCESS_TOKEN_SECRET_WORD} = require('../../constants')

module.exports = (token) => {
    return jwt.verify(token, ACCESS_TOKEN_SECRET_WORD)
}