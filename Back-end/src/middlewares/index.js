module.exports.authMiddleware = require('./user/auth.middleware')
module.exports.carPhotoMiddleware = require('./car/carPhoto.middleware')
module.exports.checkAccessToken = require('./token/checkAccessToken.middleware')
module.exports.checkRefreshToken = require('./token/checkRefreshToken.middleware')
module.exports.newCarMiddleware = require('./car/newCar.middleware')
module.exports.newUserMiddleware = require('./user/newUser.middleware')
module.exports.isTokenCookieMiddleware = require('./token/isTokenCookie.middleware')
module.exports.refreshTokenMiddleware = require('./token/refreshToken.middleware')
