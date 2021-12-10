const path = require('path')
require('dotenv').config({path: path.resolve('.env')})

module.exports = {
    PORT: process.env.PORT || 2000,

    // mongoDB
    MONGO_URL: process.env.MONGO_URL || '',
    USERS_COLLECTION: process.env.USERS_COlLECTION || '',
    CARS_COLLECTION: process.env.CARS_COlLECTION || '',
    TOKENS_COLLECTION: process.env.TOKENS_COLLECTION || '',

    // email
    EMAIL_PASS: process.env.EMAIL_PASS || 'NO PASS',
    EMAIL_USER: process.env.EMAIL_USER || 'NO EMAIL USER',
    EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'NO SERVICE',
    EMAIL_HOST: process.env.EMAIL_HOST || 'NO HOST',
    EMAIL_PORT: process.env.EMAIL_PORT || 'NO EMAIL PORT',

    // front-end
    FRONT_END_URL: process.env.FRONT_END_URL || 'NO FRONT-END URL'
}