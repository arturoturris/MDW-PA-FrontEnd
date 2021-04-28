const {API_URL} = require('../config/config')
const fetch = require('node-fetch')

function renderMaterias(req,res){
    fetch(`${API_URL}profesores/${req.usuario.matricula}/materias`)
    .then(promiseFetch=>promiseFetch.json())
    .then(subjects => {
        res.render('profesor/dashboard',{
            pageTitle: 'Materias',
            usuario: req.usuario.nombre,
            subjects,
            menuSelection: 'Materias',
            role: 'PROFESOR'
        })
    })
    .catch(error => res.send(error))
}

function renderDetalles(req,res){
    fetch(`${API_URL}proyectos/${req.params.id_proyecto}`)
    .then(promiseFetch=>promiseFetch.json())
    .then(details => {
        res.render("profesor/details_project",{
            pageTitle:"Detalles de Proyecto",
            usuario: req.usuario.nombre,
            details,
            menuSelection: 'Materias',
            role: 'PROFESOR'
        })
    });
}

function renderMateria(req,res){
    fetch(`${API_URL}materias/${req.params.nrc}/proyectos`)
    .then(promiseFetch=>promiseFetch.json())
    .then(projects => {
        res.render("profesor/subjects",{
            pageTitle:"Proyectos",
            usuario: req.usuario.nombre,
            projects,
            menuSelection: 'Materias',
            role: 'PROFESOR'
        })
    });
}

function renderAsignacion(req,res){
    fetch(`${API_URL}asignacion/${req.params.id_proyecto}`)
    .then(promiseFetch=>promiseFetch.json())
    .then(projects => {
        //console.log(projects)
        res.render("profesor/asignacion",{
        pageTitle:"Asignacion",
        usuario: req.usuario.nombre,
        projects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
        });
    })
}

function renderCierre(req,res){
    res.render("profesor/cierre",{
        pageTitle:"Cierre",
        usuario:`${req.usuario.nombre}`,
        //projects:projects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    });
}

function renderReporte(req,res){
    res.render("profesor/reporte",{
        pageTitle:"Reporte General",
        usuario:`${req.usuario.nombre}`,
        //projects:projects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    });
}

function renderCrearTarea(req,res){
    fetch(`${API_URL}proyectos/${req.params.id_proyecto}`)
    .then(promiseFetch=>promiseFetch.json())
    .then(details => {
        fetch(`${API_URL}etapas/${req.params.id_proyecto}`)
        .then(promiseFetch=>promiseFetch.json())
        .then(etapas =>{
            res.render("profesor/crearTarea",{
                pageTitle:"Crear Tarea",
                usuario: req.usuario.nombre,
                details,
                etapas,
                api:`${API_URL}`,
                id_proyecto:req.params.id_proyecto,
                menuSelection: 'Materias',
                role: 'PROFESOR'
            })
        });
    });
}

module.exports = {
    renderMaterias,
    renderDetalles,
    renderMateria,
    renderAsignacion,
    renderCierre,
    renderReporte,
    renderCrearTarea
};