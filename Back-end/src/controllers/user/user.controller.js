const {userService, emailService, tokenService} = require('../../services')
const {hashPassword, tokenRandomizer} = require('../../helpers')
const {ACTION: {ACTION_REGISTRATION}} = require('../../constants/emailActions.enum')
const {token} = require('morgan')

class UserController {

    async createUser(req, res) {
        try {
            req.body.password = await hashPassword(req.body.password)
            const {email, _id, name} = await userService.createUser(req.body)


            emailService.sendMail(req.body.email, ACTION_REGISTRATION, {userName: name})
            const tokens = tokenRandomizer({email, _id})
            res.json({...tokens})

        } catch (e) {
            res.json(e.message)
        }
    }

    async getUserByParams(req, res) {
        const {email: reqEmail} = req.body
        const {name, email, birthYear} = await userService.getUserByParams(reqEmail)
        res.json({name, email, birthYear})
    }


    async logIn(req, res) {
        try {
            const {_id, email} = req.user
            const tokens = tokenRandomizer({email, _id})
            const {refresh_token} = tokens


            await tokenService.saveRefreshToken({refresh_token, userId: _id})
            res.cookie('refresh_token', refresh_token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json({
                ...tokens
            })
        } catch (e) {
            console.log(e)
        }
    }


    async logOut(req, res) {
        const {refresh_token} = req.cookies
        await tokenService.deleteTokenByParams({refresh_token})
        res.status(200).json('token deleted')
    }

    async check(req, res) {
        const {_id, email} = req.user
        const {access_token} = tokenRandomizer({_id, email})
        res.json({access_token})
    }
}

module.exports = new UserController