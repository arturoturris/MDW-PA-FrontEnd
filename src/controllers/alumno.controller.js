const {API_URL} = require('../config/config')
const fetch = require('node-fetch')

function renderProyectos(req,res){
    res.render('alumno/proyectos',{pageTitle: 'Proyectos',role: 'ALUMNO'})
}

module.exports = {
    renderProyectos
}