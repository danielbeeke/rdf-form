import { Language } from './Language'

export const JsonLdProxy = (data, context) => {
  if (typeof data !== 'object') return data

  const convertProp = (prop) => {
    if (prop.toString().includes(':')) {
      const propSplit = prop.toString().split(':')
      if (context?.[propSplit[0]]) {
        prop = prop.toString().replace(propSplit[0] + ':', context[propSplit[0]])
      }
    }

    return prop
  }

  return new Proxy(data, {
    get(target, prop, receiver) {
      prop = convertProp(prop)
      if (prop === '$') return target
      if (prop === 'isProxy') return true
      if (prop === '_') return Language.multilingualValue(target)
      
      const isOurProperty = !Reflect.has({}, prop) && !Reflect.has([], prop) && Reflect.has(target, prop)

      if (target[prop]?.[0]?.['@list'] && isOurProperty) {
        return JsonLdProxy(target[prop][0]['@list'], context)
      }

      if (isOurProperty) {
        return JsonLdProxy(target[prop], context)
      }

      if (['filter'].includes(prop.toString())) {
        const requestedMethod = Reflect.get(target, prop, receiver)
        return (...input) => {
          return requestedMethod.apply(target.map(item => JsonLdProxy(item, context)), input)
        }
      }

      return Reflect.get(target, prop, receiver)
    },

    set (target, prop, value) {
      prop = convertProp(prop)
      target[prop] = value
      return true
    }    
  })
}