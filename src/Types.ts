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
  resolve (quad: Quad, formElementData: FormElementData): FieldSuggestion | void
}

export type FormElementData = {
  children: Array<any>,
  predicateMeta: any,
  subject: string | void
}

export interface FormElement {}

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
