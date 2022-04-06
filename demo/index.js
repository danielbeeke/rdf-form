import 'rdf-form'

const form = document.createElement('rdf-form')
form.setAttribute('form', `/tests/example.form.ttl`)
form.setAttribute('debug', null)
// form.setAttribute('proxy', 'https://thingproxy.freeboard.io/fetch/')
form.setAttribute('ui-languages', JSON.stringify({"en": "English", "nl": "Nederlands"}))
form.setAttribute('data', `/tests/example.ttl`)
form.setAttribute('selected-l10n-language', `nl`)
form.setAttribute('selected-language', `nl`)

form.addEventListener('indexing-languages', (event) => {
  event.detail.languages.push(['lorem', 'Lorem'])
  event.detail.languages.push(['rmy-x-bsa', 'South Slavic Ardilean Bayash'])
  event.detail.languages.push(['nl-Latn', 'Nederlands'])
  event.detail.languages.push(['nl-Cyrl', 'Nederlands'])
  event.detail.languages.push(['sr-latn-x-mltlngl-rmy-x-vg', 'Serbian multilingual Vlach Romani'])
  event.detail.languages.push(['rmy-x-vg-x-mltlngl-rmy-x-vg', 'Vlach Romani multilingual'])
})

form.addEventListener('submit', (event) => {
  console.log(event.detail)
})

document.body.appendChild(form)
