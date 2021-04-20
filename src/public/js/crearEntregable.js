import {LoadingBar} from './LoadingBar.js'
//let idProyecto = document.getElementById('idProyecto').textContent;
function crearEntregable(e) {
    e.preventDefault()
    let rubrica =  document.querySelector("input[type='file']")
    let formData = new FormData()
    formData.append("nombre",`${e.target.querySelector('[name="nombre-entregable"]').value}`)
    formData.append("instrucciones",`${e.target.querySelector('[name="instrucciones-entregable"]').value}`)
    formData.append("fecha",`${e.target.querySelector('[name="fecha-entregable"]').value}`)
    formData.append("rubrica",rubrica.files[0])
   
    
    const url = e.target.action;

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => {
      if(res.status === 201)
          return {status: 201}    
      return res.json()
  })
  .then(res => {
      LoadingBar.close()

      if(res.status === 201){
          alert('ENTREGABLE CREADO')
          window.location.href=`/profesor/asignacion${url.slice(url.lastIndexOf('/'))}`
      }
  })
  .catch(err => {
      LoadingBar.close()
      error.log(err)
  });
}

document.querySelector('form').addEventListener('submit',e => crearEntregable(e))