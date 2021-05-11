const ENV = process.argv[2]
const HOST = ENV == 'production' ?
    'http://3.142.69.247' :
    'http://localhost'
const APP_PORT = process.env.port || 3000
const APP_HOST = `${HOST}:${APP_PORT}`
const API_URL = ENV == 'production' ?
    'http://3.142.69.247:3300/api/v1/' :
    'http://localhost:3300/api/v1/'

module.exports = {
    ENV,
    APP_PORT,
    APP_HOST,
    API_URL,
}