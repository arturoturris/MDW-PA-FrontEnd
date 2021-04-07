const {API_URL} = require('../config/config')
const fetch = require('node-fetch')

function renderSignUp(req,res){
    fetch(`${API_URL}/carreras`)
        .then(promiseFetch => promiseFetch.json())
        .then(carreras => res.render('login/signUp',{pageTitle: 'Registro',carreras,apiUrl: API_URL}))
        .catch(error => res.send(error))
}

function renderSignIn(req,res){
    res.render('login/login',{pageTitle: 'Inicio de Sesión',apiUrl: API_URL})
}

module.exports = {
    renderSignUp,
    renderSignIn
}