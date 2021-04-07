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
        subjects: subjects,
        role: 'PROFESOR'
    });
});

router.get('/details',(req,res)=>{
    res.render("profesor/details_project",{
        pageTitle:"Detalles de Proyecto",
        username:"Nombre ApellidoP ApellidoM",
        role: 'PROFESOR'
    })
})

router.get('/:NRC',(req,res)=>{
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
        username:"Nombre ApellidoP ApellidoM",
        projects:projects,
        role: 'PROFESOR'
    });
});


module.exports=router;