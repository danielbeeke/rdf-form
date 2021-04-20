import { lastPart } from '../helpers/lastPart'

export const JsonLdProxy = (data, context, extraCommands: { [key: string]: (value) => any} = {}) => {
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

      for (const [command, callback] of Object.entries(extraCommands)) {
        if (prop === command) return callback(target)
      }

      if (prop[0] === '*') {
        const lastPartToFind = prop.toString().substr(1)
        for (const key of Object.keys(target)) {
          if (lastPart(key) === lastPartToFind) {
            prop = key
          }
        }
      }
      
      const isOurProperty = !Reflect.has({}, prop) && !Reflect.has([], prop) && Reflect.has(target, prop)

      if (target[prop]?.[0]?.['@list'] && isOurProperty) {
        return JsonLdProxy(target[prop][0]['@list'], context, extraCommands)
      }

      if (isOurProperty) {
        return JsonLdProxy(target[prop], context, extraCommands)
      }

      if (['filter'].includes(prop.toString())) {
        const requestedMethod = Reflect.get(target, prop, receiver)
        return (...input) => {
          return requestedMethod.apply(target.map(item => JsonLdProxy(item, context, extraCommands)), input)
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