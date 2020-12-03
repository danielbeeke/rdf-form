import { FormElementRegistry } from './FormElementRegistry'
import { JsonLdProcessor } from 'jsonld';
import { lastPart } from "./Helpers";
import {FieldValues} from "./FieldValues";

export async function jsonLdToFormElements (jsonLd, formElementRegistry: FormElementRegistry, formData) {
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

  const createFormElement = async (field, fieldValues) => {
    const fieldName = lastPart(field['@id'])
    const childFields = field[formPrefix + 'fieldWidget'][0]['@value'] === 'group' ? fieldsArray.filter(field => field?.[formPrefix + 'fieldGroup']?.[0]?.['@value'] === fieldName) : []
    const children = new Map()

    const values = new FieldValues(fieldValues, field[formPrefix + 'binding'][0]['@id'])

    for (const childField of childFields) {
      const childFieldName = lastPart(childField['@id'])
      const childValues = {}
      childValues[childField[formPrefix + 'binding'][0]['@id']] = values.getAll().flatMap(groupItem => groupItem[childField[formPrefix + 'binding'][0]['@id']])
      const childFormElement = await createFormElement(childField, childValues)
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
    }
  }

  return fields;
}
