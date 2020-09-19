/**
 * This module nests the quad in a way that works good for the form.
 * It groups quads that have the same predicate-subject, quads that are translations of one another and
 * quads that belong to a multi value field.
 */
import { Quad, NestedQuads, FormElementData } from './Types'
import { filterInSet } from './Helpers'

export class QuadNester {

  private subjectReferences = new Map()
  public quadReferences = new Map()
  public formElementReferences: Set<any> = new Set()
  public quads: Array<Quad>
  readonly nestedQuads: NestedQuads

  constructor(quads) {
    this.quads = quads
    this.nestedQuads = { children: [] }

    for (const quad of this.quads) {
      const subject = quad.subject?.id ?? quad.subject?.value
      const subjectFormElement = this.ensureSubject(subject)

      if (subjectFormElement) {
        let child = subjectFormElement.children.find(child => child.quad === quad)
        if (!child) this.createChild(quad, subjectFormElement)
      }
    }
  }

  /**
   * Given a subject uri, returns a subject formElementData.
   * @param subject
   */
  ensureSubject (subject): FormElementData {
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

      this.nestedQuads.children.push(subjectFormElement)
      subjectFormElement.parent = this.nestedQuads
    }

    // The subject exists as object. Recursively call ourselves so we have the subject of the subject.
    else {
      subjectFormElement = {
        subject: subject,
        quads: subjectQuads,
        children: []
      }

      const parentSubject = subjectQuads[0].subject?.id ?? subjectQuads[0].subject?.value

      if (parentSubject === subject) {
        this.nestedQuads.children.push(subjectFormElement)
        subjectFormElement.parent = this.nestedQuads
      }
      else {
        const parentSubjectFormElement = this.ensureSubject(parentSubject)
        parentSubjectFormElement.children.push(subjectFormElement)
        subjectFormElement.parent = parentSubject
      }
    }

    this.formElementReferences.add(subjectFormElement)
    this.subjectReferences.set(subject, subjectFormElement)

    for (const quad of subjectQuads) {
      this.quadReferences.set(quad, subjectFormElement)
    }

    return subjectFormElement
  }

  /**
   * Creates a child within the subject.
   * @param quad
   * @param subjectFormElement
   */
  createChild (quad, subjectFormElement) {
    const possibleSubject = quad?.object?.id ?? quad?.object?.value

    if (this.quadReferences.get(quad) || this.subjectReferences.get(possibleSubject)) return false

    const quads = filterInSet(innerQuad =>
      innerQuad.predicate.equals(quad.predicate) &&
      innerQuad.subject.equals(quad.subject)
      , this.quads)

    const child = {
      children: [],
      quads: quads,
      parent: subjectFormElement
    }

    for (const quad of quads) {
      this.quadReferences.set(quad, child)
    }

    subjectFormElement.children.push(child)
    this.formElementReferences.add(child)

    return child
  }

  /**
   * Returns the first usable structure of the nestedQuads
   */
  get structure () {
    if (this.nestedQuads.children.length) {
      return this.nestedQuads.children[0].children
    }
    else {
      return this.nestedQuads.children
    }
  }

}
