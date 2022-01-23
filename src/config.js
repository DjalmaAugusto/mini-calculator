const ENVIRONMENT = process.env.NODE_ENV
const PORT = process.env.PORT

const DB = process.env.MONGO_DB

const JWT = {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
}

module.exports = {
    ENVIRONMENT,
    PORT,
    DB,
    JWT
}