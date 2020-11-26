---
link: Overview
---

## Overview

### CustomElement `<rdf-form>`

RDF-form works with a CustomElement `<rdf-form>`. 

You give it a couple of attributes:

- data: A file in turtle format containing the data. It may also be a string.
- form: The form definition, see below for the supported field types etc.
- selected-language: The language to load when the widget starts.
- i10n-languages: The languages to which you want to translate the content to.
- ui-languages: The UI languages you want to show. At the moment it is only translated from English to Dutch.
- proxy: A CORS proxy url for example: `https://thingproxy.freeboard.io/fetch/`

```html
<rdf-form
    data="https://rdf.danielbeeke.nl/recipe/tomato-soup.ttl"
    form="https://rdf.danielbeeke.nl/recipe/recipe.form.ttl"
    selected-language="en"
    i10n-languages='{"en": "English", "nl": "Nederlands"}'
    ui-languages='{"en": "English", "nl": "Nederlands"}'
    proxy="https://thingproxy.freeboard.io/fetch/"
>
</rdf-form>
```

### Form definition

Here is the form definition for the example above. It is the same content as: https://rdf.danielbeeke.nl/recipe/recipe.form.ttl.

[form_definition]

### Example of initiated RDF-form

Here is how this form looks. Try to change the interface language. Referenced terms that are multilingual will be updated.

<rdf-form
    data="https://rdf.danielbeeke.nl/recipe/tomato-soup.ttl"
    form="https://rdf.danielbeeke.nl/recipe/recipe.form.ttl"
    selected-language="en"
    i10n-languages='{"en": "English", "nl": "Nederlands"}'
    ui-languages='{"en": "English", "nl": "Nederlands"}'
    proxy="https://2i9izrkade.execute-api.eu-central-1.amazonaws.com/dev?url="
    >
</rdf-form>
