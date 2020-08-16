import { OpenGraph } from './resolvers/OpenGraph'
import { W3 } from './resolvers/w3'
import { SchemaOrg } from './resolvers/schema.org'
import { FieldTypes } from './FieldTypes'
import { Quad } from './Quad'

export interface FieldInfo {
  fieldType: FieldTypes;
  fieldResolver: FieldResolverInterface;
}

export interface FieldResolverFields {
  predicate: Map<string, FieldInfo>;
  dataType: Map<string, FieldInfo>;
}

export type FieldResolverTypes = keyof FieldResolverFields;

export class FieldResolver {
  private resolvers: Array<FieldResolverInterface> = [new SchemaOrg(), new W3(), new OpenGraph()]

  private fields: FieldResolverFields = {
    predicate: new Map(),
    dataType: new Map()
  }

  constructor () {
    for (const resolver of this.resolvers) {
      resolver.addDefinitions(this)
    }
  }

  set (what: FieldResolverTypes, key: string, fieldType: FieldTypes, fieldResolver: FieldResolverInterface) {
    this.fields[what].set(key, {
      fieldType: fieldType,
      fieldResolver: fieldResolver
    })
  }

  resolve (quad: Quad) {
    let resolvedFieldInfo: FieldInfo | undefined

    const resolvedPredicateFieldInfo = this.fields.predicate.get(quad.predicate.value)

    for (const fieldType of Object.values(FieldTypes)) {
      if (resolvedPredicateFieldInfo && fieldType === resolvedPredicateFieldInfo.fieldType) resolvedFieldInfo = resolvedPredicateFieldInfo
    }

    if (quad.object?.datatype?.value) {
      const resolvedDataTypeFieldInfo = this.fields.dataType.get(quad.object.datatype.value)

      for (const fieldType of Object.values(FieldTypes)) {
        if (resolvedDataTypeFieldInfo && fieldType === resolvedDataTypeFieldInfo.fieldType) resolvedFieldInfo = resolvedPredicateFieldInfo
      }
    }

    if (resolvedFieldInfo) {
      quad.fieldLabel = ''
      quad.fieldType = resolvedFieldInfo ? resolvedFieldInfo.fieldType : undefined

      resolvedFieldInfo.fieldResolver.getLabel(quad).then((description: string | undefined) => {
        quad.fieldLabel = description
      })

      console.log(JSON.stringify(quad))
    }
  }
}

export interface FieldResolverInterface {
  addDefinitions(fieldResolver: FieldResolver): void;
  getLabel(quad: Quad): Promise<string | undefined>;
}
