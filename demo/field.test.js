import { init } from '../dist/rdf-form.esm'
init()

const fieldType = location.hash.substr(1) ? location.hash.substr(1) : 'unknown'

const form = document.createElement('rdf-form')
form.setAttribute('form', `/tests/elements/${fieldType}.form.ttl`)
// form.setAttribute('debug', null)
form.setAttribute('data', `/tests/elements/${fieldType}.ttl`)

form.addEventListener('submit', (event) => {
  console.log(event.detail)
})

form.addEventListener('file-deleted', (event) => {
  console.log('file-deleted', event.detail)
})

form.addEventListener('file-added', (event) => {
  console.log('file-added', event.detail)
})

document.body.appendChild(form)
