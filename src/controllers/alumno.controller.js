const {API_URL} = require('../config/config')
const fetch = require('node-fetch')

function redirectToLandingPage(req,res){
    res.redirect('/alumno/misProyectos')
}

function redirectToLandingProyecto(req,res){
    const {id_proyecto} = req.params

    res.redirect(`/alumno/misProyectos/${id_proyecto}/etapas`)
}

async function renderProyectos(req,res){
    const proyectos = await getProyectos(req.usuario.matricula)

    res.render('alumno/pages/proyectos.page.ejs',{
        usuario: req.usuario.nombre,
        pageTitle: 'Proyectos',
        menuSelection: 'Proyectos',
        role: 'ALUMNO',
        proyectos
    })
}

async function renderNuevoProyecto(req,res){
    const matricula = req.usuario.matricula
    const materias = await getMateriasAlumno(matricula)

    res.render('alumno/pages/nuevoProyecto.page.ejs',{
        usuario: req.usuario.nombre,
        pageTitle: 'Nuevo proyecto',
        menuSelection: 'Proyectos',
        role: 'ALUMNO',
        materias,
        matricula
    })
}

async function renderModificarProyecto(req,res){
    const {id_proyecto} = req.params

    res.render('alumno/pages/modificarProyecto.page.ejs',{
        usuario: req.usuario.nombre,
        pageTitle: 'Modificar proyecto',
        menuSelection: 'Proyectos',
        role: 'ALUMNO',
        id_proyecto
    })
}

async function renderProyecto(req,res){
    const {id_proyecto} = req.params
    const proyecto = await getInfoProyecto(id_proyecto)
    const etapas = await getEtapasProyecto(id_proyecto)

    res.render('alumno/pages/proyecto.page.ejs',{
        usuario: req.usuario.nombre,
        pageTitle: `Proyecto ${id_proyecto}`,
        menuSelection: 'Proyectos',
        role: 'ALUMNO',
        projectMenuSelection: 'Etapas',
        proyecto,
        etapas
    })
}

async function renderNuevaEtapa(req,res){
    const {id_proyecto} = req.params
    const proyecto = await getInfoProyecto(id_proyecto)

    res.render('alumno/pages/nuevaEtapa.page.ejs',{
        usuario: req.usuario.nombre,
        pageTitle: `Nueva etapa - Proyecto ${id_proyecto}`,
        menuSelection: 'Proyectos',
        role: 'ALUMNO',
        projectMenuSelection: 'Etapas',
        proyecto
    })
}

function getProyectos(matricula){
    return fetch(`${API_URL}alumnos/${matricula}/proyectos`,{
        method: 'GET'
    })
    .then(async res => {
        if(res.status === 200)
            return await res.json()
        return []
    })
    .then(proyectos => proyectos)
    .catch(err => {
        console.error(err)
        return []
    })
}

function getMateriasAlumno(matricula){
    return fetch(`${API_URL}alumnos/${matricula}/materias`,{
        method: 'GET'
    })
    .then(async res => {
        if(res.status === 200)
            return await res.json()
        return []
    })
    .then(materias => materias.Materia)
    .catch(err => {
        console.error(err)
        return []
    })
}

function getInfoProyecto(id_proyecto){
    return fetch(`${API_URL}proyectos/${id_proyecto}`)
    .then(async res => {
        if(res.status === 200)
            return await res.json()
        return []
    })
    .then(proyecto => proyecto)
    .catch(err => {
        console.error(err)
        return []
    })
}

function getEtapasProyecto(id_proyecto){
    return fetch(`${API_URL}proyectos/${id_proyecto}/etapas`)
    .then(async res => {
        if(res.status === 200)
            return await res.json()
        return []
    })
    .then(etapas => etapas)
    .catch(err => {
        console.error(err)
        return []
    })
}

module.exports = {
    redirectToLandingPage,
    renderProyectos,
    renderNuevoProyecto,
    renderProyecto,
    renderModificarProyecto,
    redirectToLandingProyecto,
    renderNuevaEtapa
}