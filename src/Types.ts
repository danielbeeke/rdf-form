export interface FormElement extends EventTarget {}

export interface OntoLogyMeta {
  promise: Promise<any>,
  quads: Array<any>
}

export interface fieldPrototype {
  required: false,
  multiple: false,
  fieldWidget: null,
  disabled: false,
  order: 0,
  rows: 1,
  subject: null,
  binding: '',
  translatable: false,
  name: null,
  label: {},
  input: null
}

