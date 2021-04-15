import {API_URL} from './config.js'

let listaAlumnos = null

const solicitarAlumnos = async () => {
    //SOLICITAR TODOS LOS ALUMNOS QUE PERTENEZCAN A LA MATERIA
    const nrc = document.querySelector('#materias').value

    return fetch(`${API_URL}/materias/${nrc}/lista`,{
        method: 'GET'
    })
    .then(async res => {
        return res.status === 200 ? await res.json() : null
    })
    .then(lista => lista.Alumnos)
    .catch(err => {
        console.error(err)
        return null
    })
}

const cargarAlumnos = alumnos => {
    const lista_alumnos = document.querySelector('#lista_alumnos')

    for(let alumno of alumnos){
        lista_alumnos.innerHTML += `
            <option value="${alumno.matricula}">${alumno.matricula} - ${alumno.nombre} ${alumno.paterno} ${alumno.materno}</option>
        `
    }
}

const habilitarComponenteEquipo = () => {
    const componenteEquipo = document.querySelector('#componente_equipo')
    const materias = document.querySelector('#materias')

    reiniciarComponenteEquipo()

    if(materias.value){
        componenteEquipo.removeAttribute('disabled')
    }
    else{
        componenteEquipo.setAttribute('disabled','')
    }
}

const reiniciarComponenteEquipo = () => {
    document.querySelector('#integrantes').innerHTML = ''
    document.querySelector('#lista_alumnos').innerHTML = `<option value="" disabled selected>Materias</option>`
}

const cargarNuevoIntegrante = integrante => {
    const integrantes = document.querySelector('#integrantes')

    const contenedor = document.createElement('div')
    const input = document.createElement('input')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const btnEliminar = document.createElement('input')

    contenedor.setAttribute('class','list-item d-flex justify-content-center justify-content-md-between align-items-center flex-wrap col-md-6 col-sm-12 mb-4')
    input.setAttribute('type','hidden')
    input.setAttribute('name','matricula')
    input.setAttribute('value',integrante.matricula)
    img.setAttribute('src','https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png')
    span.setAttribute('class','text-center')
    span.innerHTML = `${integrante.matricula} - ${integrante.nombre} ${integrante.paterno} ${integrante.materno}`
    btnEliminar.setAttribute('type','button')
    btnEliminar.setAttribute('value','Eliminar')
    btnEliminar.setAttribute('class','btn btn-danger')
    btnEliminar.addEventListener('click', e => {
        btnEliminar.parentElement.remove()
    })

    contenedor.appendChild(input)
    contenedor.appendChild(img)
    contenedor.appendChild(span)
    contenedor.appendChild(btnEliminar)

    integrantes.appendChild(contenedor)
}

const enviarFormulario = (e) => {
    e.preventDefault()

    const equipo = obtenerEquipo()

    const body = JSON.stringify({
        nombre_proyecto: `${e.target.querySelector('[name="nombre_proyecto"]').value}`,
        fecha_inicio: `${e.target.querySelector('[name="fecha_inicio"]').value}`,
        fecha_limite: `${e.target.querySelector('[name="fecha_limite"]').value}`,
        nrc: `${Number.parseInt(e.target.querySelector('[name="nrc"]').value)}`,
        descripcion: `${e.target.querySelector('[name="descripcion"]').value}`,
<<<<<<< HEAD
        coordinador: 201749575,
=======
        coordinador: `${Number.parseInt(e.target.querySelector('[name="coordinador"]').value)}`,
>>>>>>> b1
        equipo
    })

    fetch(`${API_URL}proyectos`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body
    })
    .then(res => {
        if(res.status === 201)
            return {status: 201}    
        return res.json()
    })
    .then(res => {
        console.log(res)
        if(res.status === 201)
            alert('PROYECTO CREADO')
    })
    .catch(err => {error.log(err)})
}

const obtenerEquipo = () => {
    let integrantes = document.querySelectorAll('#integrantes input[name="matricula"]')
    let equipo = []

    integrantes.forEach(integrante => equipo.push(Number.parseInt(integrante.value)))

    return equipo
}

const main = async (e) => {
    document.querySelector('#materias').addEventListener('change',async e => {
        habilitarComponenteEquipo()
        listaAlumnos = await solicitarAlumnos()
        cargarAlumnos(listaAlumnos)
    })

    document.querySelector('#btn_agregar_integrante').addEventListener('click', e => {
        const matricula = document.querySelector('#lista_alumnos').value
        const nuevoIntegrante = listaAlumnos.find(alumno => alumno.matricula == matricula)

        if(nuevoIntegrante)
            cargarNuevoIntegrante(nuevoIntegrante)
    })

    document.querySelector('form').addEventListener('submit',e => enviarFormulario(e))
}

window.addEventListener('load',main)