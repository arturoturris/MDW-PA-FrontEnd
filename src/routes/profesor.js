const {Router} = require('express');
const router = Router();
const profesorController = require('../controllers/profesor.controller')

router.get('/',
    profesorController.renderMaterias);

router.get('/details',
    profesorController.renderDetalles);

router.get('/:NRC',
    profesorController.renderMateria);


module.exports=router;