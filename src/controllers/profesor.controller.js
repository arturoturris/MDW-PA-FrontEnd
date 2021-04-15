const {API_URL} = require('../config/config')
const fetch = require('node-fetch')

function renderMaterias(req,res){
    fetch(`${API_URL}/materias/${req.usuario.id_usuario}`)
    .then(promiseFetch=>promiseFetch.json())
    .then(subjects => {
        res.render('profesor/dashboard',{
            pageTitle: 'Materias',
            username:req.usuario.nombre,
            subjects,
            menuSelection: 'Materias',
            role: 'PROFESOR'
        })
    })
    .catch(error => res.send(error))
}

function renderDetalles(req,res){
    fetch(`${API_URL}/detalles/${req.params.id_proyecto}`)
    .then(promiseFetch=>promiseFetch.json())
    .then(details => {
        res.render("profesor/details_project",{
            pageTitle:"Detalles de Proyecto",
            username:`${req.usuario.nombre}`,
            details,
            menuSelection: 'Materias',
            role: 'PROFESOR'
        })
    });
}

function renderMateria(req,res){
    fetch(`${API_URL}/proyectos/${req.params.NRC}`)
    .then(promiseFetch=>promiseFetch.json())
    .then(projects => {
        res.render("profesor/subjects",{
            pageTitle:"Proyectos",
            username:`${req.usuario.nombre}`,
            projects,
            menuSelection: 'Materias',
            role: 'PROFESOR'
        })
    });
}

function renderAsignacion(req,res){
    res.render("profesor/asignacion",{
        pageTitle:"Asignacion",
        username:`${req.usuario.nombre}`,
        //projects:projects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    });
}

function renderCierre(req,res){
    res.render("profesor/cierre",{
        pageTitle:"Cierre",
        username:`${req.usuario.nombre}`,
        //projects:projects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    });
}

function renderReporte(req,res){
    res.render("profesor/reporte",{
        pageTitle:"Reporte General",
        username:`${req.usuario.nombre}`,
        //projects:projects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    });
}

module.exports = {
    renderMaterias,
    renderDetalles,
    renderMateria,
    renderAsignacion,
    renderCierre,
    renderReporte
};