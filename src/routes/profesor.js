const { render } = require('ejs');
const {Router} = require('express');
const router = Router();


router.get('/',(req,res)=>{
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
        username:"Nombre ApellidoP ApellidoM",
        subjects: subjects
    });
});

router.get('/:NRC',(req,res)=>{
    console.log(req.params);
    let projects=[
        {
            name:"Proyecto X",
            responsable: "Alumno responsable",

        },
        {
            name:"Proyecto X",
            responsable: "Alumno responsable",
            
        },
        {
            name:"Proyecto X",
            responsable: "Alumno responsable",
            
        }
    ];
    res.render("profesor/subjects",{
        pageTitle:"Proyectos",
        username:"Nombre ApellidoP ApellidoM",
        projects:projects
    });
});

module.exports=router;