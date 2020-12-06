import { html } from './vendor/uhtml.js'
import { StringProxy } from "./FieldDefinition";

const classReplacements = new Map()
const known = new WeakMap;

export const Classy = function (templates, ...values) {
  const convertStringsToPrimitives = (values) => {
    for (let [index, value] of values.entries()) {
      if (value instanceof String || value instanceof StringProxy) {
        values[index] = value.valueOf()
      }

      if (value && typeof value === 'object' && value.values && Array.isArray(value.values)) {
        convertStringsToPrimitives(value.values)
      }
    }
  }

  convertStringsToPrimitives(values)

  if (known.has(templates))
    /** @ts-ignore */
    return html(known.get(templates), ...values)

  const newTemplates = []
  known.set(templates, newTemplates)
  for (let [index, template] of templates.entries()) {
    const regex = new RegExp(/classy:([a-zA-Z-]*)="([a-zA-Z- ]*)"/g)
    newTemplates[index] = template.replace(regex, function (fullString, identifier, defaultClasses) {
      return 'class="' + (classReplacements.get(identifier) ? classReplacements.get(identifier).join(' ') : defaultClasses) + '"'
    })
  }

  /** @ts-ignore */
  return html(newTemplates, ...values)
}

Classy.for = html.for

Classy.add = function (identifier: string, classes: Array<string>) {
  classReplacements.set(identifier, classes)
}
