const {userModel} = require('../../DataBase/models')

class UserService {

    createUser(info) {
        return userModel.create(info)
    }

    getUserByParams(params) {
        return userModel.findOne(params)

    }
}

module.exports = new UserService