import { FieldTypes } from './FieldTypes'

export interface Quad {
  object: {
    termType: string,
    value: string,
    id: string,
    datatype: {
      termType: string,
      value: string
    }
  },
  subject: object,
  predicate: {
    value: string
  },
  fieldType: FieldTypes | undefined,
  fieldLabel: string | undefined,
  fieldDescription: string | undefined,
}
