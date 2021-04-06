const {Router} = require('express')
const router = Router()

router.get('/',(req,res) => {
    //REVISAR SI ESTÁ LOGGEADO PARA DESPLEGAR LA PAGINA DE INICIO CORRESPONDIENTE
    res.render('login/login',{pageTitle: 'Inicio de Sesión'})
})

router.get('/register',(req,res) => {
    res.render('login/register',{pageTitle: 'Registro'})
})

router.get('/dashboard',(req,res)=>{
    let subjects = [
        {
            name:"Metodologias de desarrollo web",
            projects:[
                {
                    project_name:"Proyecto X",
                    responsable_member: "Sin nombre"
                },
                {
                    project_name:"Proyecto X",
                    responsable_member: "Sin nombre"
                },
                {
                    project_name:"Proyecto X",
                    responsable_member: "Sin nombre"
                },
                {
                    project_name:"Proyecto X",
                    responsable_member: "Sin nombre"
                },
                {
                    project_name:"Proyecto X",
                    responsable_member: "Sin nombre"
                },
                {
                    project_name:"Proyecto X",
                    responsable_member: "Sin nombre"
                }]
        }];
    res.render("profesor/dashboard",{
        pageTitle:"Dashboard",
        username:"Nombre ApellidoP ApellidoM",
        subjects: subjects
    });
});
// router.use('/',require('./clientes'))

module.exports = router