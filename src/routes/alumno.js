const {Router} = require('express')
const router = Router()
const alumnoController = require('../controllers/alumno.controller.js')

router.get('/',
    alumnoController.renderProyectos)

router.get('/nuevoProyecto',
    alumnoController.renderNuevoProyecto)

module.exports = router