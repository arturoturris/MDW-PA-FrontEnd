import {API_URL} from './config.js'

function signIn(e) {
    e.preventDefault()

    const body = JSON.stringify({
        email: `${e.target.querySelector('[name="email"]').value}`,
        contrasena: `${e.target.querySelector('[name="contrasena"]').value}`
    })

    console.log(body)
    const url = e.target.action

    fetch(url,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body
    })
    .then(async res => {
        let obj

        if(res.status === 200)
            obj = {status: res.status, ...(await res.json())}
        else
            obj = {status: res.status, message: 'Email/Contraseña inválidos.'}

        return obj
    })
    .then(res => {
        if(res.status === 200){
            localStorage.setItem('token',res.token)   
            alert('AUTENTICADO')
            loadLandingPage()
        }
        else{
            alert(res.message)
        }
    })
    .catch(err => {console.error(err)})
}

function loadLandingPage(){
    fetch(`${API_URL}authorize`,{
        method: 'GET',
        headers: new Headers({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
    .then(async res => {
        return {status: res.status, ...(await res.json())}
    })
    .then(res => {
        if(res.rol === 'ALUMNO')
            window.location.href = 'http://localhost:3000/proyectos'
        else
            window.location.href = 'http://localhost:3000/dashboard'
    })
    .catch(err => console.error(err))
}

document.querySelector('form').addEventListener('submit',e => signIn(e))