const express = require('express')
const app = express()
const {APP_PORT} = require('./config/config')
const morgan = require('morgan')
const path = require('path')

//CONFIG
app.set('port',APP_PORT)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//MIDDLEWARES
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//ROUTES
app.use('/',require('./routes/index'))

//SERVER
app.listen(app.get('port'), (req,res) => {
    console.log(`WEB APP ON PORT ${app.get('port')}`)
})