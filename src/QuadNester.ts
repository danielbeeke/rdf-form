import { Quad, NestedQuads } from './Types'
import { findInSet, filterInSet } from './Helpers'

export class QuadNester {

  private subjectReferences = new Map()
  public quadReferences = new Map()
  private processedQuads: Set<Quad> = new Set()
  public quads: Array<Quad>
  readonly nestedQuads: NestedQuads

  constructor(quads) {
    this.quads = quads
    this.nestedQuads = {
      children: []
    }
    for (const quad of this.quads) {
      const subject = quad.subject?.id ?? quad.subject?.value
      const object = quad.object?.id ?? quad.object?.value

      let subjectReference = this.subjectReferences.get(subject)
      if (!subjectReference) subjectReference = this.createSubject(subject)

      if (subjectReference) {
        // We check if we have a subjectReference, if no subjectReference is found the RDF was incomplete.
        let child = subjectReference.children.find(child => child.quad === quad)

        if (subjectReference && !this.subjectReferences.has(object) && !child) {
          const newField = this.createChild(quad)
          if (newField) subjectReference.children.push(newField)
        }
      }
    }
  }

  createChild (quad, force = null) {
    if (this.processedQuads.has(quad) && !force) return false

    const quads = filterInSet(innerQuad =>
      innerQuad.predicate.equals(quad.predicate) &&
      innerQuad.subject.equals(quad.subject)
    , this.quads)

    const child = {
      children: [],
      quads: quads,
    }

    for (const quad of quads) {
      this.processedQuads.add(quad)
      this.quadReferences.set(quad, child)
    }

    return child
  }

  createSubject (subject) {
    const subjectQuad = findInSet(quad => quad?.object?.id ?? quad?.object?.value === subject, this.quads)

    if (!subjectQuad) {
      const standAloneSubject = {
        children: [],
        quads: [],
        id: subject,
      }

      this.nestedQuads.children.push(standAloneSubject)
      this.subjectReferences.set(subject, standAloneSubject)
      return standAloneSubject
    }

    const subjectValue = subjectQuad.subject?.id ?? subjectQuad.subject?.value

    if (subjectQuad && subjectValue) {
      let subjectReference = this.subjectReferences.get(subjectValue)

      if (!subjectReference) subjectReference = this.nestedQuads

      if (subjectReference) {
        let child = subjectReference.children.find(child => child.quad === subjectQuad)

        if (!child) {
          child = this.createChild(subjectQuad, true)

          if (child) {
            this.subjectReferences.set(subject, child)
            subjectReference.children.push(child)
          }
        }

        return child
      }
    }
  }
}
