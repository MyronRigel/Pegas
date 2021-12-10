const mongoose = require('mongoose')

const {MONGO_URL} = require('../config')

const connectDB = async () => {
    let connection = null
    try {
        connection = await mongoose.connect(MONGO_URL)
        console.log({ level: 'notice', message: 'MongoDB Connected...' })
    } catch (err) {
        console.log(JSON.stringify({ key: 'Mongodb', value: err.message }))
    }

    return connection
}

module.exports = connectDB
