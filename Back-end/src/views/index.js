const {ACTION:{ACTION_REGISTRATION, ACTION_RENT_CAR}} = require('../constants/emailActions.enum')

module.exports = {
    [ACTION_REGISTRATION] : {
        subject: 'Pegas Industry | Welcome',
        templateFileName: 'welcome'
    },

    [ACTION_RENT_CAR] : {
        subject: 'Pegas Industry | rent car',
        templateFileName: 'rent'
    },

}