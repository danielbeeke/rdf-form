import {html, Tag, TemplateFunction} from 'uhtml'

export type QuadPart = {
  id: string,
  value: string,
}

export type Quad = {
  predicate: QuadPart
  subject: QuadPart,
  object: QuadPart
}

export type NestedQuads = {
  children: Array<any>
}

export interface FormElementResolver {
  resolve (quad: Quad, formElementData: FormElementData, uiQuads: any): FieldSuggestion | void
}

export type FormElementData = {
  children: Array<any>,
  predicateMeta: any,
  subject: string | void,
  quads: Array<Quad>,
  parent: FormElementData,
  formElement: FormElement,
}

export interface FormElement extends EventTarget {

}

export interface OntoLogyMeta {
  promise: Promise<any>,
  quads: Array<any>
}

export type Newable<T> = { new (...args: any[]): T };

export type FieldSuggestion = {
  importance: number,
  type: string
}

export type PredicateMeta = any

export type AddressFields = {
  postalCode: FormElementData,
  country: FormElementData,
  locality: FormElementData,
  streetAddress: FormElementData,
  type: FormElementData,
}

export interface UriChanger {
  check (uri: string): void
}
