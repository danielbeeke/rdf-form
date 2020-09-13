import {debug} from "webpack";
import { Quad, NestedQuads } from './Types'
import { findInSet, filterInSet } from './Helpers'

export class QuadNester {

  private subjectReferences = new Map()
  public quadReferences = new Map()
  private processedQuads: Set<Quad> = new Set()
  public formElementReferences: Set<any> = new Set()
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
      const predicate = quad.predicate?.id ?? quad.predicate?.value

      const subjectFormElement = this.ensureSubject(subject)

      if (subjectFormElement) {
        // // We check if we have a subjectFormElement, if no subjectFormElement is found the RDF was incomplete.
        let child = subjectFormElement.children.find(child => child.quad === quad)

        if (!child) {
          this.createChild(quad, subjectFormElement)
        }
      }
    }
  }

  ensureSubject (subject) {
    let subjectFormElement = this.subjectReferences.get(subject)
    if (subjectFormElement) return subjectFormElement

    const subjectQuads = filterInSet(quad => {
      const objectValue = quad.object?.id ?? quad.object?.value
      return objectValue === subject
    }, this.quads)

    // The subject was not found as an object. Therefore we create it at the root of the form. It is probably the main subject.
    if (!subjectQuads.length) {
      subjectFormElement = {
        subject: subject,
        quads: [],
        children: [],
      }

      this.formElementReferences.add(subjectFormElement)
      this.subjectReferences.set(subject, subjectFormElement)
      this.nestedQuads.children.push(subjectFormElement)
    }

    // The subject exists as object. Recursively call ourselves so we have the subject of the subject.
    else {
      subjectFormElement = {
        subject: subject,
        quads: subjectQuads,
        children: []
      }

      this.formElementReferences.add(subjectFormElement)
      this.subjectReferences.set(subject, subjectFormElement)
      const parentSubject = subjectQuads[0].subject?.id ?? subjectQuads[0].subject?.value
      const parentSubjectFormElement = this.ensureSubject(parentSubject)
      parentSubjectFormElement.children.push(subjectFormElement)
    }

    return subjectFormElement
  }

  createChild (quad, subjectFormElement) {
    if (this.processedQuads.has(quad)) return false

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

    subjectFormElement.children.push(child)
    this.formElementReferences.add(child)

    return child
  }

  get structure () {
    return this.nestedQuads.children
  }

}
