const {Router} = require('express')
const {userRouter, carRouter} = require('./allRouters')
const router = Router()

router.use('/api/cars', carRouter)
router.use('/api/users', userRouter)

module.exports = router