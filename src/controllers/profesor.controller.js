const {API_URL} = require('../config/config')
const fetch = require('node-fetch')

function renderMaterias(req,res){
    let subjects = [
        {
            name:"Metodologias de desarrollo web",
            term:"Primavera",
            NRC:"XER"
        },
        {
            
            name:"Tecnologías Web",
            term:"Primavera",
            NRC:"ASZ"
        },
        {
            name:"Herramientas Web",
            term:"Primavera",
            NRC:"AWD"
        },
        {
            name:"Desarrollo de Sitios Web",
            term:"Primavera",
            NRC:"ZAS"
        },
        {
            name:"Desarrollo de Sitios Web",
            term:"Primavera",
            NRC:"ZAS"
        }];
    res.render("profesor/dashboard",{
        pageTitle:"Materias",
        usuario:`${req.usuario.nombre}`,
        subjects: subjects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    });
}

function renderDetalles(req,res){
    res.render("profesor/details_project",{
        pageTitle:"Detalles de Proyecto",
        usuario:`${req.usuario.nombre}`,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    })
}

function renderMateria(req,res){
    console.log(req.params);
    let projects=[
        {
            name:"Proyecto X",
            responsable: "Alumno responsable",
            id:"12"

        },
        {
            name:"Proyecto X",
            responsable: "Alumno responsable",
            id:"123"
        },
        {
            name:"Proyecto X",
            responsable: "Alumno responsable",
            id:"1234"
        }
    ];
    res.render("profesor/subjects",{
        pageTitle:"Proyectos",
        usuario:`${req.usuario.nombre}`,
        projects:projects,
        menuSelection: 'Materias',
        role: 'PROFESOR'
    });
}

module.exports = {
    renderMaterias,
    renderDetalles,
    renderMateria
};