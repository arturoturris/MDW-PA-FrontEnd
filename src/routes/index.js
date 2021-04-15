const {Router} = require('express')
const router = Router()
const loginController = require('../controllers/login.controller')

//LOGIN
router.use('/registro',loginController.renderSignUp)
router.use('/',loginController.signedIn) //SI ESTÁ LOGGEADO ENTONCES CARGA LAS DEMAS RUTAS

//A PARTIR DE AQUI SE PUEDE USAR EL OBJETO (req.usuario)

//ALUMNO
router.use('/alumno',require('./alumno'))

//PROFESOR
router.use('/profesor',require('./profesor'))

router.use('/',(req,res) => {
    if(req.usuario.rol === 'ALUMNO')
        res.redirect('/alumno')
    else if(req.usuario.rol === 'PROFESOR')
        res.redirect('/profesor')
    else{
        //PAGINA 404
        res.send('PAGINA NO ENCONTRADA')
    }
})

module.exports = router