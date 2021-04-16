import { FieldValues } from "./FieldValues";

export interface FormElement extends EventTarget {
  init ():  Promise<any>;
  templateWrapper(index?: number): Promise<Promise<any>>;
  Field: FieldDefinition
  Values: FieldValues
  parent?: FormElement
}

export type FieldDefinition = {
  required: boolean
  multiple: boolean
  fieldWidget: string
  disabled: boolean
  readonly: boolean
  order: number
  rows: number
  binding: Array<string> 
  translatable: boolean | string
  name: string
  label: string
  input: null
  autoCompleteSource: string | Array<any>
  autoCompleteQuery: string
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
  dimensions: boolean
  innerBinding: Array<string>
  innerType: string
  focalPoint: Array<any>
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
