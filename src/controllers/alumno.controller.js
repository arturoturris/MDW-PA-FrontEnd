const {API_URL} = require('../config/config')
const fetch = require('node-fetch')

function renderProyectos(req,res){
    res.render('alumno/proyectos/proyectos',{
        pageTitle: 'Proyectos',
        menuSelection: 'Proyectos',
        role: 'ALUMNO'
    })
}

function renderNuevoProyecto(req,res){
    res.render('alumno/nuevoProyecto/nuevoProyecto',{
        pageTitle: 'Nuevo proyecto',
        menuSelection: 'Proyectos',
        role: 'ALUMNO'
    })
}

module.exports = {
    renderProyectos,
    renderNuevoProyecto
}