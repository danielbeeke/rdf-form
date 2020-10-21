import { html } from 'uhtml'

const classReplacements = new Map()
const known = new WeakMap;

export const Classy = function (templates, ...values) {
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
