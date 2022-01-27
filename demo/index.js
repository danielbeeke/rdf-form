import { init } from '../dist/rdf-form.esm'
init()

const form = document.createElement('rdf-form')
form.setAttribute('form', `/tests/example.form.ttl`)
form.setAttribute('debug', null)
form.setAttribute('proxy', 'https://thingproxy.freeboard.io/fetch/')
form.setAttribute('ui-languages', JSON.stringify({"en": "English", "nl": "Nederlands"}))
form.setAttribute('data', `/tests/example.ttl`)

form.addEventListener('submit', (event) => {
  console.log(event.detail)
})

document.body.appendChild(form)
