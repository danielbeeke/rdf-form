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

  const createFormElement = async (field, parentValues) => {
    if (!field[formPrefix + 'fieldWidget']) return

    const fieldName = lastPart(field['@id'])
    const childFields = field[formPrefix + 'fieldWidget'][0]['@value'] === 'group' ? fieldsArray.filter(field => field?.[formPrefix + 'fieldGroup']?.[0]?.['@value'] === fieldName) : []
    const children = new Map()
    const binding = field[formPrefix + 'binding']?.[0]['@id']

    if (!parentValues[binding]) parentValues[binding] = []

    const wrapperBinding = field[formPrefix + 'wrapperBinding']?.[0]?.['@id']
    const values = new FieldValues(parentValues, field[formPrefix + 'binding'].map(value => value['@id']), wrapperBinding, field[formPrefix + 'additionalBindings']?.map(value => value['@id']))

    for (const childField of childFields) {
      const childFormElement = await createFormElement(childField, values.getAllFromOneBinding())
      children.set(wrapperBinding ?? binding, childFormElement)
    }

    const formElement = formElementRegistry.get(field[formPrefix + 'fieldWidget'][0]['@value'], field, children, values, comunica, formPrefix, form.jsonLdContext)

    if (formElement) {
      await formElement.init()

      for (const child of formElement.children.values()) {
        child.parent = formElement
      }

      return formElement
    }
  }

  for (const field of firstLevelFields) {
    const formElement = await createFormElement(field, formData)

    if (formElement) {
      const wrapperBinding = formElement.Field.wrapperBinding.toString()
      const binding = formElement.Field.binding.toString()
      fields.set(wrapperBinding ? wrapperBinding : binding, formElement)
      formElement.parent = form
    }
  }

  return fields;
}

/**
 * Replaces subForm fields with their sub form definitions.
 * A subform field holds an URL to the sub form definition.
 * @param formDefinition
 */
export const resolveSubForms = async (formDefinition) => {
  const formPrefix = formDefinition['@context']['form']

  for (const field of formDefinition['@graph']) {

    const subformUri = field['form:subform']?.['@id']

    if (subformUri) {
      const subformResponse = await fetch(subformUri)
      const subformDefinitionText = await subformResponse.text()
      const subformDefinition = ttl2jsonld(subformDefinitionText, {})

      // Some properties may be inherit from the parent, such as weight and container.
      for (const subField of subformDefinition['@graph']) {
        if (subField['@type'] !== 'form:Field') continue;

        if (field[formPrefix + 'container']) {
          subField['form:container'] = field[formPrefix + 'container'][0]['@value']
        }

        if (field[formPrefix + 'order']) {
          subField['form:order'] = field[formPrefix + 'order'][0]['@value'] + parseFloat('0.' + subField['form:order'])
        }
      }

      formDefinition['@context'] = Object.assign(formDefinition['@context'], subformDefinition['@context'])

      const fieldIndex = formDefinition['@graph'].indexOf(field)
      formDefinition['@graph'].splice(fieldIndex, 1, ...subformDefinition['@graph'])
    }
  }

  return formDefinition
}
