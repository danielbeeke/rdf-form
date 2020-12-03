import { FormElementRegistry } from './FormElementRegistry'
import { JsonLdProcessor } from 'jsonld';

const lastPart = (text) => {
  return text.split(/\:|\/|\,|\#/).pop()
}

export async function jsonLdToFormElements (jsonLd, formElementRegistry: FormElementRegistry) {
  const expandedJsonLd = await JsonLdProcessor.expand(jsonLd);
  const fieldsArray = []
  const fields: Map<any, any> = new Map()
  const formPrefix = jsonLd['@context']['form']

  for (const field of expandedJsonLd) {
    fieldsArray.push(field)
  }

  fieldsArray.sort((a, b) => {
    return a['form:order'] - b['form:order']
  })

  for (const field of fieldsArray) {
    const formElement = formElementRegistry.get(field[formPrefix + 'fieldWidget'][0]['@value'], field)

    if (formElement) {
      const fieldName = lastPart(field['@id'])
      fields.set(fieldName, formElement)
    }
  }

  return fields;
}
