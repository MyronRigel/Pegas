const nodemailer = require('nodemailer')
const EmailTemplates = require('email-templates')
const path = require('path')
const htmlTemplates = require('../../views')

const {EMAIL_PASS, EMAIL_USER, EMAIL_SERVICE, EMAIL_HOST, EMAIL_PORT, FRONT_END_URL} = require('../../config')

const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE,
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
})

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'src', 'views', 'email')
    }
})

class EmailService {
    async sendMail(userEmail, action, context) {
        try {
            const templateInfo = htmlTemplates[action]
            const html = await emailTemplates.render(templateInfo.templateFileName, {...context, frontEndUrl: FRONT_END_URL})

            const mailOption = {
                from: 'NO REPLY',
                to: userEmail,
                subject: templateInfo.subject,
                html
            }

            return transporter.sendMail(mailOption, err => console.log(err))
        } catch (e) {
            console.log(e)
        }

    }
}

module.exports = new EmailService