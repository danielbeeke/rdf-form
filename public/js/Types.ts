export interface FormElement extends EventTarget {
  init ():  Promise<any>;
  templateWrapper(index?: number): Promise<Promise<any>>;
  Field: FieldDefinitionOptions
}

export interface FieldDefinitionOptions {
  required: boolean
  multiple: boolean
  fieldWidget: null
  disabled: boolean
  order: number
  rows: number
  subject: null | Array<any>
  binding: string | Array<any>
  translatable: boolean
  name: null
  label: string | Array<any>
  input: null
  autoCompleteSource: string | Array<any>
  autoCompleteQuery: string | Array<any>
  optionsSource: string | Array<any>
  optionsQuery: string | Array<any>
  emptyText: string | Array<any>
  placeholder: string | Array<any>
  description: string | Array<any>
  option: string | Array<any>
  range: string
  fieldGroup: string
  prefix: string
  jsonLdKey: string
  saveEmptyValue: string
}

export interface FieldDefinitionProxy extends FieldDefinitionOptions {
  [Symbol.iterator](): IterableIterator<string>;
}

export interface IDuration {
  sign: string
  years: number
  months: number
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

declare global {
  interface Window { RdfForm: any; }
}
