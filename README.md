# RDF data to HTML form

Is it possible to create a form straight from a set of triples?
Maybe it is. That is the idea behind this code.

This readme will try to explain the concepts involved in an order that is somewhat close the execution of the code.

![alt text][logo]

## Custom Elements

- Create a HTML element like ```<rdf-form url="https://www.rubensworks.net/" />```
- When the page loads it will render a fully functional form containing all the triples from the resource.
- The data can be serialized and be posted to a backend. This can be done with the 'submit' event on the HTML element.

## FormElementResolverRegistry

When the page loads and thus the javascript starts, it is possible to register FormElementResolvers.
A FormElementResolver is a class that reacts to discovered quads. It is responsible for recognizing what field type belongs a specific quads. A modular approach is used. So you could have a FormElementResolver for country autocomplete widgets, but you could also have FormElementResolver that resolves every field of a specific owl ontology. 


```
import { FormElementResolverRegistry as FERR, foafFER } from 'rdf-form'

FERR.register(foafFER)
```

## FormElementRegistry

The FormElementRegistry is the registry for form elements. FormElementResolvers do a suggestion for a specific form element that is known by the FormElementRegistry.

```
import { FormElementRegistry as FER, FormElementBase, FormElement } from 'rdf-form'

class AddressGeocoder extends FormElementBase implements FormElement {

    template() {
        return this.html(`...`)
    }

    autoCompleteSearch () {}

}

FER.register(AddressGeocoder)
```

A form element must comply to certain rules. It should use uHtml to render the field. It may use the other templates, or may replace them with templates better suited for the element.

## PredicateMetaResolver

When an RDF form is loaded, it first gets all the quads from the source. The source can be a URL or a text containing the triples itself. The quads load into a quadStream. For every quad the PredicateMetaResolver will de-reference the predicate URI. The result of de-referencing the URI is the Owl ontology containing metadata about the quad. It will have a label, a comment and probably a data type. All those quads are kept in cache so other parts of rdf-form can use it. 

After this phase we will have a set of quads with metadata about the predicate. Next is the QuadNester.

## QuadNester

This process nests the quads into a structure that will be used for the form. This means that for example a set of quads that contain all the address information, like street, number, postal code, city and country are put into a group. This will be done by making a hierarchy of subjects.  When this quads are nested the next phase is the FormElementResolvers.

## FormElementResolvers

Every FormElementResolver will be called for each quad. The resolver can do a suggestion for what will be used to render the field, including its children. That suggestion could be for an address for example an autocomplete geocoder for addresses. Or it could be an input with the type number. These suggestions will be in the following format: ```{ type: 'address-compound', importance: 23 }```

When all resolvers have had their turn the suggestion with the highest importance will be used.

# Work in progress

The idea is to put the properties: required, multiple, translatable etc inside an ontology. That way you can create a form, add a uri to a form definition and render it:

```

<rdf-form
        rdf='
  @prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
  @prefix v:  <http://www.w3.org/2006/vcard/ns#> .

  <http://example.com/me/corky> a v:VCard ;
     v:fn "Corky Crystal" ;
     v:nickname "Corks"@en ;
     v:nickname "Kurk"@nl ;
     v:tel
         [ a v:Home, v:Voice ;
             rdf:value "+61 7 5555 5555"
         ] ;
     v:email  <mailto:corky@example.com> ;
     v:adr
         [ a v:Home ;
             v:country-name "Australia" ;
             v:locality "WonderCity" ;
             v:postal-code "5555" ;
             v:street-address "111 Lake Drive"
         ] . '
        type="text/turtle"
        proxy="https://thingproxy.freeboard.io/fetch/"
    definition='
  @prefix rf:  <http://rdf-form.io#> .
  @prefix v:  <http://www.w3.org/2006/vcard/ns#> .

   v:nickname rf:translatable true ;
   v:nickname rf:multiple true .

'
></rdf-form>

```
[logo]: https://raw.githubusercontent.com/danielbeeke/rdf-form/master/screenshot/progress.png "Screenshot of progress"
