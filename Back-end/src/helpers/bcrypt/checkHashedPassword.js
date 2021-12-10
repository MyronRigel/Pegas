const bcrypt = require('bcrypt')

module.exports = (password, passwordFromDB) => {
    return bcrypt.compare(password, passwordFromDB)
}
