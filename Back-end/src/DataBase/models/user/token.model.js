const {Schema, model} = require('mongoose')
const path = require('path')
const {TOKENS_COLLECTION} = require(path.join(process.cwd(), 'src', 'config'))

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users',
        unique: true
    },
    refresh_token: {
        type: String,
        required: true
    }
})

module.exports = model('Tokens', tokenSchema, TOKENS_COLLECTION)