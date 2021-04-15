import {API_URL} from './config.js'
<<<<<<< HEAD
=======
import {LoadingBar} from './LoadingBar.js'
>>>>>>> b1

function signIn(e) {
    e.preventDefault()

<<<<<<< HEAD
=======
    LoadingBar.show()

>>>>>>> b1
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
<<<<<<< HEAD
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
            alert(res.message)
        }
    })
    .catch(err => {console.error(err)})
=======
        LoadingBar.close()

        return {
            status: res.status,
            ...((res.status != 401) && await res.json())
        }
    })
    .then(res => {
        const {status} = res

        if(status === 200){
            document.cookie = `token=${res.token}`
            
            Swal.fire({
                title: 'Autenticado',
                icon: 'success'
            })
            .then(() => {
                window.location.reload()
            })
        }
        else if(status == 401){
            Swal.fire({
                title: 'Datos erroneos',
                text: 'Usuario / Contraseña incorrectos',
                icon: 'warning'
            })
        }
        else{
            Swal.fire({
                title: 'Error del servidor',
                text: res.error || res.message,
                icon: 'error'
            })
        }
    })
    .catch(err => {
        LoadingBar.close()
        console.error(err)
    })
>>>>>>> b1
}

document.querySelector('form').addEventListener('submit',e => signIn(e))