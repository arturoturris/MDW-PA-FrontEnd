const {Router} = require('express')
const router = Router()
const loginController = require('../controllers/login.controller')

//LOGIN
router.get('/',loginController.renderSignIn)
router.get('/registro',loginController.renderSignUp)

//ALUMNO
router.get('/proyectos',(req,res) => {
    res.render('alumno/proyectos',{pageTitle: 'Proyectos',role: 'ALUMNO'})
})

//PROFESOR
router.use('/dashboard',require('./profesor'));

module.exports = router