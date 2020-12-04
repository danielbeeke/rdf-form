import { FormElementRegistry } from './FormElementRegistry'
import { JsonLdProcessor } from 'jsonld';
import { lastPart } from "./Helpers";
import { FieldValues } from "./FieldValues";

export async function jsonLdToFormElements (form, jsonLd, formElementRegistry: FormElementRegistry, formData) {
  const expandedJsonLd = await JsonLdProcessor.expand(jsonLd);
  const fieldsArray = []
  const fields: Map<any, any> = new Map()
  const formPrefix = jsonLd['@context']['form']

  for (const field of expandedJsonLd) {
    fieldsArray.push(field)
  }

  const firstLevelFields = fieldsArray.filter(field => !field?.[formPrefix + 'fieldGroup'])

  firstLevelFields.sort((a, b) => {
    return a[formPrefix + 'order'] - b[formPrefix + 'order']
  })

  const createFormElement = async (field, parentValues) => {
    const fieldName = lastPart(field['@id'])
    const childFields = field[formPrefix + 'fieldWidget'][0]['@value'] === 'group' ? fieldsArray.filter(field => field?.[formPrefix + 'fieldGroup']?.[0]?.['@value'] === fieldName) : []
    const children = new Map()
    const binding = field[formPrefix + 'binding'][0]['@id']
    if (!parentValues[binding]) {
      parentValues[binding] = []
    }

    const values = new FieldValues(parentValues, binding)

    for (const childField of childFields) {
      const childFieldName = lastPart(childField['@id'])
      const childFormElement = await createFormElement(childField, values.getAll())
      children.set(childFieldName, childFormElement)
    }

    const formElement = formElementRegistry.get(field[formPrefix + 'fieldWidget'][0]['@value'], field, children, values)

    await formElement.init()

    for (const child of formElement.children.values()) {
      child.parent = formElement
    }

    return formElement
  }

  for (const field of firstLevelFields) {
    const formElement = await createFormElement(field, formData)
    const fieldName = lastPart(field['@id'])

    if (formElement) {
      fields.set(fieldName, formElement)
      formElement.parent = form
    }
  }

  return fields;
}
