const {Schema, model} = require('mongoose')
const path = require('path')
const {USERS_COLLECTION} = require(path.join(process.cwd(),'src', 'config'))

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model('Users', userSchema, USERS_COLLECTION)