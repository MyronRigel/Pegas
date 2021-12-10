const {Router} = require('express')

const {userController} = require('../../controllers')
const {newUserMiddleware, authMiddleware, isTokenCookieMiddleware, refreshTokenMiddleware, checkAccessToken} = require('../../middlewares')

const userRouter = Router()

userRouter.post('/register', newUserMiddleware, userController.createUser)
userRouter.post('/login', authMiddleware, isTokenCookieMiddleware, refreshTokenMiddleware, userController.logIn)
userRouter.post('/logout', isTokenCookieMiddleware, userController.logOut)
userRouter.get('/auth', checkAccessToken, refreshTokenMiddleware, userController.check)



module.exports = userRouter