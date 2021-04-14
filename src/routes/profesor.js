const {Router} = require('express');
const router = Router();
const profesorController = require('../controllers/profesor.controller')

router.get('/',
    profesorController.renderMaterias);

router.get('/details/:id_proyecto',
    profesorController.renderDetalles);

router.get('/asignacion',
    profesorController.renderAsignacion);

router.get('/cierre',
    profesorController.renderCierre);

router.get('/reporte',
    profesorController.renderReporte);

router.get('/:NRC',
    profesorController.renderMateria);

module.exports=router;
