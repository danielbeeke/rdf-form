export const containerProxy = (data, mainBinding) => {
  return new Proxy(data, {
    get: function (_target, prop) {
      if (prop === '_proxyType') return 'containerProxy'
      if (!data[mainBinding]) return false
      return Reflect.get(data[mainBinding], prop)
    },

    has: function (_target, prop) {
      if (!data[mainBinding]) return false
      return Reflect.has(data[mainBinding], prop)
    },

    set: function (_target, prop, value) {
      if (!data[mainBinding]) {
        data[mainBinding] = [{'@list': []}]
        return true
      }
      else {
        return Reflect.set(data[mainBinding], prop, value)
      }
    }
  })
}