const {ErrorHandler} = require('../../Errors')
const {PHOTO_MIMETYPES, MAX_PHOTO_SIZE, BAD_PHOTO_SIZE, BAD_FILE, NO_MORE_THAN_ONE_PHOTO, NO_PHOTO} = require('../../constants')

module.exports = (req, res, next) => {
    req.photos = []

    if (!req.files) {
        return next(new ErrorHandler(NO_PHOTO, 400, 4012))
    }

    const files = Object.values(req.files)
    for (let i = 0; i < files.length; i++) {
        const {size, mimetype} = files[i]

        if (PHOTO_MIMETYPES.includes(mimetype)) {
            if (size > MAX_PHOTO_SIZE) {
                return next(new ErrorHandler(BAD_PHOTO_SIZE, 400, 4009))
            }

            req.photos.push(files[i])
        } else {
            return next(new ErrorHandler(BAD_FILE, 400, 4010))
        }
    }

    if (req.photos.length > 1) {
        return next(new ErrorHandler(NO_MORE_THAN_ONE_PHOTO, 400, 4011))
    }
    next()
}

