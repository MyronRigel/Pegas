const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const fileUpload = require('express-fileupload')

const {PORT} = require('./src/config')
const router = require('./src/routes')
const db = require('./src/DataBase/db')


dotenv.config({path: path.resolve('.env')})

const app = express()


app.use(fileUpload({}))

app.use(helmet())
app.use(morgan('dev'))

app.use(express.urlencoded())
app.use(express.json())

app.use(cookieParser())
app.use(cors())

app.use(express.static(path.join(process.cwd(), 'src', 'public')))

app.use(router)

app.options('*', cors())


app.use('*', (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'bad handling',
        customCode: err.customCode || 4000
    })
})


process.on('unhandledRejection', reason => {
    console.log(reason)
    process.exit(0)
})


async function start() {
    try {
        await db()
        app.listen(PORT, err => err ? console.log(err) : console.log(`server listen port ${PORT}...`))
    } catch (e) {
        console.log(e)
    }
}

start()



