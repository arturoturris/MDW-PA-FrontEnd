const APP_PORT = process.env.port || 3000
const APP_HOST = `http://localhost/${APP_PORT}`
const API_URL = `http://localhost:3300/api/v1/`

module.exports = {
    APP_PORT,
    APP_HOST,
    API_URL
}