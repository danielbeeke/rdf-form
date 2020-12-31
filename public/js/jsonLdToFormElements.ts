import { FormElementRegistry } from './FormElementRegistry'
import { jsonld as JsonLdProcessor } from './vendor/jsonld.js';
import { lastPart } from "./Helpers";
import { FieldValues } from "./FieldValues";
import {ttl2jsonld} from "./vendor/ttl2jsonld";

/**
 * Given a formDefinition, returns initiated formElements.
 *
 * @param form
 * @param jsonLd
 * @param formElementRegistry
 * @param formData
 * @param comunica
 */
export async function jsonLdToFormElements (form, jsonLd, formElementRegistry: FormElementRegistry, formData, comunica) {
  const expandedJsonLd = await JsonLdProcessor.expand(jsonLd);
  const fieldsArray = []
  const fields: Map<any, any> = new Map()
  const formPrefix = jsonLd['@context']['form']

  for (const field of expandedJsonLd) {
    const isField = field?.['@type']?.some(className => lastPart(className) === 'Field') ?? false
    if (isField) fieldsArray.push(field)
  }

  const firstLevelFields = fieldsArray.filter(field => !field?.[formPrefix + 'fieldGroup'])

  firstLevelFields.sort((a, b) => {
    return a[formPrefix + 'order'] - b[formPrefix + 'order']
  })

  const createFormElement = async (field, parentValues) => {
    const container = field[formPrefix + 'container']?.[0]['@value']
    const fieldName = lastPart(field['@id'])
    const subformUri = field[formPrefix + 'subform']?.[0]['@id']

    if (subformUri) {
      const subformResponse = await fetch(subformUri)
      const subformDefinitionText = await subformResponse.text()
      const subformDefinition = ttl2jsonld(subformDefinitionText, {})
      const subFields = await jsonLdToFormElements(form, subformDefinition, formElementRegistry, formData, comunica)

      // TODO Maybe inherit properties from the parent?
      // That way the form could say that the access form should be rendered somewhere else.

      return Array.from(subFields.values())
    }

    const childFields = field[formPrefix + 'fieldWidget'][0]['@value'] === 'group' ? fieldsArray.filter(field => field?.[formPrefix + 'fieldGroup']?.[0]?.['@value'] === fieldName) : []
    const children = new Map()
    const binding = field[formPrefix + 'binding']?.[0]['@id']

    if (!parentValues[binding]) {
      parentValues[binding] = []
    }

    const values = new FieldValues(parentValues, binding)

    for (const childField of childFields) {
      const childFieldName = lastPart(childField['@id'])
      const childFormElement = await createFormElement(childField, values.getAll())
      children.set(childFieldName, childFormElement)
    }

    const formElement = formElementRegistry.get(field[formPrefix + 'fieldWidget'][0]['@value'], field, children, values, comunica, formPrefix, form.jsonLdContext)

    if (formElement) {
      await formElement.init()

      for (const child of formElement.children.values()) {
        child.parent = formElement
      }

      return [formElement]
    }
  }

  for (const field of firstLevelFields) {
    const formElements = await createFormElement(field, formData)

    if (formElements) {
      for (const formElement of formElements) {
        fields.set(formElement.Field.name, formElement)
        formElement.parent = form
      }
    }
  }

  return fields;
}
