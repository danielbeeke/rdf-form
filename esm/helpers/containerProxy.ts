export const containerProxy = (data, mainBinding) => {
  return new Proxy(data, {
    get: function (target, prop) {
      if (prop === '_proxyType') return 'containerProxy'
      if (!data[mainBinding]) return false
      return Reflect.get(data[mainBinding], prop)
    },

    has: function (target, prop) {
      if (!data[mainBinding]) return false
      return Reflect.has(data[mainBinding], prop)
    },

    set: function (target, prop, value) {
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