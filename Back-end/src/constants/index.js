module.exports = {
    // tokens secret words
    // words encrypted with AES (Rijndael)
    ACCESS_TOKEN_SECRET_WORD: 'U2FsdGVkX1+fy4MvjQSON0wBWtDpcqD2jXC2I3+xEq8=',
    REFRESH_TOKEN_SECRET_WORD: 'U2FsdGVkX1/F9VFPUY1Jj6ghPigK/StF4y2PI29+N0A=',

    // errors messages
    ALREADY_EXIST_CAR: 'car model with this year of manufacture already exist',
    ALREADY_EXIST_USER: 'user with this email adlready exist',
    NOT_VALID_USER: 'nov valid user',
    USER_DONT_EXIST: 'user with this email dont exist',
    INVALID_TOKEN: 'token is not valid',
    NO_TOKEN: 'no token',
    WRONG_EMAIL_OR_PASSWORD: 'wrong email or password',
    BAD_PHOTO_SIZE: 'photo must be less then 5mb',
    BAD_FILE: 'file is not valid',
    NO_MORE_THAN_ONE_PHOTO: 'no more then one photo',
    NO_PHOTO: 'No photo, please upload',

    // photo params
    MAX_PHOTO_SIZE: 5 * 1024 * 1024,

    MAX_DOC_SIZE: 5 * 1024 * 1024,

    PHOTO_MIMETYPES: [
        'image/bmp',
        'image/gif',
        'image/jpeg',
        'image/photoshop',
        'image/png',
        'image/tiff',
        'image/x-png'
    ]
}