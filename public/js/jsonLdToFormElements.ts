import { FormElementRegistry } from './FormElementRegistry'
import { jsonld as JsonLdProcessor } from './vendor/jsonld.js';
import {lastPart} from "./helpers/lastPart";
import { FieldValues } from "./FieldValues";
import {ttl2jsonld} from "./vendor/ttl2jsonld";
import { FieldDefinition } from './FieldDefinition'

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
  const allPromises = []
  const expandedJsonLd = await JsonLdProcessor.expand(jsonLd);
  const fieldsArray = []
  const fields: Map<any, any> = new Map()
  const formPrefix = jsonLd['@context']['form']

  for (const field of expandedJsonLd) {
    const isField = field?.['@type']?.some(className => lastPart(className) === 'Field') ?? false
    if (isField) fieldsArray.push(field)
  }

  const createFormElement = async (field, parentValues) => {
    const fieldDefinition = FieldDefinition(field, formPrefix)
    if (!fieldDefinition.fieldWidget) return
    const values = new FieldValues(fieldDefinition, parentValues, form.formOntology)
    const childFields = field[formPrefix + 'fieldWidget'][0]['@value'] === 'group' ? fieldsArray.filter(field => field?.[formPrefix + 'fieldGroup']?.[0]?.['@value'] === fieldDefinition.name) : []
    const children = new Map()

    for (const childField of childFields) {
      const childFieldDefinition = FieldDefinition(childField, formPrefix)
      const childFieldName = lastPart(childField['@id'])
      const childParentValues = values.getForChildElement(childFieldDefinition)
      const childFormElement = await createFormElement(childField, childParentValues)
      children.set(childFieldName, childFormElement)
    }

    const formElement = formElementRegistry.get(fieldDefinition.fieldWidget, fieldDefinition, values, children, form.jsonLdContext, comunica)

    if (formElement) {
      allPromises.push(formElement.init())
      return formElement
    }
  }

  const firstLevelFields = fieldsArray.filter(field => !field?.[formPrefix + 'fieldGroup'])

  for (const field of firstLevelFields) {
    const formElement = await createFormElement(field, formData)

    if (formElement) {
      fields.set(formElement.Field.binding, formElement)
      formElement.parent = form
    }
  }

  // For now we let all the inits finish and then continue.
  await Promise.all(allPromises)

  return fields;
}

/**
 * Replaces subForm fields with their sub form definitions.
 * A subform field holds an URL to the sub form definition.
 * @param formDefinition
 */
export const resolveSubForms = async (formDefinition) => {
  if (!formDefinition['@graph']) throw new Error('Missing fields inside form definition')
  
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
