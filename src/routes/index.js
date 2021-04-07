const {Router} = require('express')
const router = Router()

router.get('/',(req,res) => {
    //REVISAR SI ESTÁ LOGGEADO PARA DESPLEGAR LA PAGINA DE INICIO CORRESPONDIENTE
    res.render('login/login',{pageTitle: 'Inicio de Sesión'})
})

router.get('/register',(req,res) => {
    res.render('login/register',{pageTitle: 'Registro'})
})

router.get('/proyectos',(req,res) => {
    res.render('alumno/proyectos',{pageTitle: 'Proyectos'})
})

// router.use('/',require('./clientes'))

module.exports = router