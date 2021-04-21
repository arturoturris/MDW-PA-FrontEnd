const {Router} = require('express')
const router = Router()
const alumnoController = require('../controllers/alumno.controller.js')

router.get('/',
    alumnoController.redirectToLandingPage)
router.get('/misProyectos',
    alumnoController.renderProyectos)
router.get('/misProyectos/nuevoProyecto',
    alumnoController.renderNuevoProyecto)
router.get('/misProyectos/:id_proyecto',
    alumnoController.redirectToLandingProyecto)
router.get('/misProyectos/:id_proyecto/modificarProyecto',
    alumnoController.renderModificarProyecto)
router.get('/misProyectos/:id_proyecto/etapas',
    alumnoController.renderProyecto)
router.get('/misProyectos/:id_proyecto/etapas/nuevaEtapa',
    alumnoController.renderNuevaEtapa)

module.exports = router