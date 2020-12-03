const { document } = require('basichtml').init({});
const test = require('ava');
import { FieldDefinition } from "../src/FieldDefinition";

const field = {
  "@id": "http://rdf.danielbeeke.nl/recipe/recipe.form.ttl#fn",
  "http://rdf.danielbeeke.nl/form/form-dev.ttl#binding": [
    {
      "@id": "http://purl.org/arecipe/fn"
    }
  ],
  "http://rdf.danielbeeke.nl/form/form-dev.ttl#fieldWidget": [
    {
      "@value": "string"
    }
  ],
  "http://rdf.danielbeeke.nl/form/form-dev.ttl#label": [
    {
      "@language": "en",
      "@value": "Title"
    },
    {
      "@language": "nl",
      "@value": "Titel"
    }
  ],
  "http://rdf.danielbeeke.nl/form/form-dev.ttl#order": [
    {
      "@value": 1
    }
  ],
  "http://rdf.danielbeeke.nl/form/form-dev.ttl#required": [
    {
      "@value": true
    }
  ],
  "http://rdf.danielbeeke.nl/form/form-dev.ttl#translatable": [
    {
      "@value": true
    }
  ]
}

const fieldDefinition = FieldDefinition(field, 'http://rdf.danielbeeke.nl/form/form-dev.ttl#')

test('a property having one value should return the one value when called directly', t => {
  t.assert(fieldDefinition.binding, 'http://purl.org/arecipe/fn');
});

test('a property having multiple values should return those when called as an iterator', t => {
  const labels = []
  for (const label of fieldDefinition.label) {
    labels.push(label)
  }

  t.assert('[{"@language":"en","@value":"Title"},{"@language":"nl","@value":"Titel"}]', JSON.stringify(labels))
});
