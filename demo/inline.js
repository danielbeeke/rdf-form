import 'rdf-form'

const form = document.createElement('rdf-form')
form.setAttribute('form', `
@prefix rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:  <http://www.w3.org/2000/01/rdf-schema#> .
@prefix form:  <http://rdf.danielbeeke.nl/form/form-dev.ttl#> .
@prefix ex:    <https://example.org/#> .
@prefix dc:    <http://purl.org/dc/terms/> .
@prefix :      <http://localhost/todo-form.ttl#> .

:form a form:Form ;
    form:binding ex:Todo .

:todo
    a form:Field ;
    form:binding ex:items ;
    form:widget "group" ;
    form:multiple true ;
    form:label "Todo items" ;
    form:required true ;
    form:order 1 .

:todoItem
    a form:Field ;
    form:binding ex:task ;
    form:widget "string" ;
    form:group "todo" ;
    form:label "Task" ;
    form:required true ;
    form:order 1 .

:todoCheck
    a form:Field ;
    form:binding ex:completed ;
    form:widget "checkbox" ;
    form:group "todo" ;
    form:label "Done" ;
    form:order 2 .
`)
form.setAttribute('data', `
{
    "@type": "https://example.org/#Todo",
    "https://example.org/#items": {
      "@list": [
        {
          "https://example.org/#completed": true,
          "https://example.org/#task": "Wake up"
        },
        {
          "https://example.org/#completed": true,
          "https://example.org/#task": "Drink coffee"
        },
        {
          "https://example.org/#task": "Breakfast"
        },
        {
          "https://example.org/#task": "Save the world"
        }
      ]
    }
}
`)

form.addEventListener('submit', (event) => {
  console.log(event.detail)
})

document.body.appendChild(form)