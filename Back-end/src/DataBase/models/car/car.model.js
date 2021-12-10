const mongoose = require('mongoose')
const path = require('path')
const {CARS_COLLECTION} = require(path.join(process.cwd(), 'src', 'config'))
const {string} = require('joi')

const Schema = mongoose.Schema

const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    horsePower: {
        type: Number,
        required: true
    },
    yearOfManufacture: {
        type: Number,
        required: true
    },
    carType: {
        type: String,
        required: true
    },
    acceleration: {
        type: Number,
        required: true
    },
    maxSpeed: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    photo: {
        type: String
    }
})

module.exports = mongoose.model('carModel', carSchema, CARS_COLLECTION)