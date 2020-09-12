export interface FormStructure {
  id: string,
  children: Array<any>
}

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
  resolve (quad: Quad, predicateMeta: PredicateMeta): FieldSuggestion | void
}

export interface FormElement {
  readonly type: string
}

export type Newable<T> = { new (...args: any[]): T };

export type FieldSuggestion = {
  importance: number,
  type: string
}

export type PredicateMeta = any
