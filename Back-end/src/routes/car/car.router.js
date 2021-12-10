const {Router} = require('express')

const {carController} = require('../../controllers')
const {newCarMiddleware, checkAccessToken, carPhotoMiddleware} = require('../../middlewares')

const carRouter = Router()

carRouter.post('/catalog/add', checkAccessToken, newCarMiddleware, carPhotoMiddleware, carController.addCar)
carRouter.get('/catalog', carController.getAllCars)
carRouter.get('/catalog/:id', checkAccessToken, carController.getCarById)

module.exports = carRouter