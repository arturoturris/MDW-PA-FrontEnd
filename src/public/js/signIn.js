import {API_URL} from './config.js'

function signIn(e) {
    e.preventDefault()

    const body = JSON.stringify({
        email: `${e.target.querySelector('[name="email"]').value}`,
        contrasena: `${e.target.querySelector('[name="contrasena"]').value}`
    })
    
    const url = e.target.action

    fetch(url,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body
    })
    .then(async res => {
        let obj

        console.log(res)

        if(res.status === 200)
            obj = {status: res.status, ...(await res.json())}
        else
            obj = {status: res.status, message: 'Email/Contraseña inválidos.'}

        return obj
    })
    .then(res => {
        if(res.status === 200){
            document.cookie = `token=${res.token}`
            alert('AUTENTICADO')
            window.location.reload()
        }
        else{
            $("#user-encontrado").html('<div class="alert alert-danger alert-dismissible">'+
            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
            `<strong></strong>${res.message}</div>`);
            //alert(res.message)
        }
    })
    .catch(err => {console.error(err)})
}

document.querySelector('form').addEventListener('submit',e => signIn(e))