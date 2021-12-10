const path = require('path')
const uuid = require('uuid').v4()
const fs = require('fs-extra')
const {carService} = require('../../services')


class CarController {

    async addCar(req, res) {
        try {
            const [photo] = req.photos
            if (photo) {
                const {_id} = await carService.addCar(req.body)

                const photoDir = `cars/${_id}/photos`
                const photoExtension = photo.name.split('.').pop()
                const photoName = `${uuid}.${photoExtension}`

                await fs.mkdirp(path.resolve(process.cwd(), 'src', 'public', photoDir), {recursive: true})
                photo.mv(path.resolve(process.cwd(), 'src', 'public', photoDir, photoName))

                await carService.updateCar({_id}, {photo: `${photoDir}/${photoName}`})
            }
            res.json('car added successfully')
        } catch (e) {
            res.json(e.message)
        }
    }

    async getCarById(req, res) {
        try {
            const {id} = req.params
            const car = await carService.getCarByParams({_id: id})
            res.json(car)
        } catch (e) {
            res.json(e)
        }

    }

    async getAllCars(req, res) {
        const cars = await carService.getAllCars()
        res.json(cars)
    }
}

module.exports = new CarController