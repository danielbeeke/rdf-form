import {FormElementRegistry} from "./FormElementRegistry.js";

export const expand = (text, context) => {
  const textSplit = text.split(':')
  const alias = textSplit[0]
  return text.replace(alias + ':', context[alias])
}

const lastPart = (text) => {
  return text.split(':').length > 1 ? text.split(':')[1] : text
}

export const expandAll = (jsonLd, context) => {
  const expanded = {}

  for (const [property, value] of Object.entries(jsonLd)) {
    expanded[expand(property, context)] = value
  }

  return expanded
}

const extractLanguageValue = (value) => {
  const returnValue = {}
  returnValue[value['@language']] = value['@value']
  return returnValue
}

const extractLanguageValues = (values) => {
  const returnValue = {}
  for (const value of values) {
    returnValue[value['@language']] = value['@value']
  }
  return returnValue
}

/**
 * @see http://rdf.danielbeeke.nl/form/form-dev.ttl
 */
const fieldPrototype = {
  required: false,
  multiple: false,
  fieldWidget: null,
  disabled: false,
  order: 0,
  rows: 1,
  subject: null,
  binding: null,
  translatable: false,
  name: null,
  label: null
}

export function jsonLdToFormDefinition (jsonLd, formElementRegistry: FormElementRegistry) {
  const fieldsArray = []
  const fields: Map<any, any> = new Map()

  for (const field of jsonLd['@graph']) {
    const fieldName = lastPart(field['@id'])
    const newField = Object.assign({}, fieldPrototype)

    for (const [property, value] of Object.entries(field)) {
      if (property === '@id') {
        newField.name = fieldName
        continue
      }

      if (Array.isArray(value)) {
        const firstValue = value?.[0]
        if (firstValue && firstValue?.['@value'] && firstValue?.['@language']) {
          newField[lastPart(property)] = extractLanguageValues(value)
        }
        else {
          throw new Error('Unknown case')
        }
      }
      else if (typeof value === 'object') {
        if (value?.['@id']) {
          newField[lastPart(property)] = expand(value['@id'], jsonLd['@context'])
        }
        else if (value?.['@value'] && value?.['@language']) {
          newField[lastPart(property)] = extractLanguageValue(value)
        }
        else {
          throw new Error('Unknown case')
        }
      }
      else {
        newField[lastPart(property)] = value
      }
    }

    fieldsArray.push(newField)
  }

  fieldsArray.sort((a, b) => {
    return a.order - b.order
  })

  for (const field of fieldsArray) {
    fields.set(field.name, formElementRegistry.get(field.fieldWidget, field))
  }

  return fields;
}
