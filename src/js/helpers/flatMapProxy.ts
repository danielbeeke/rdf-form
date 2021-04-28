export const flatMapProxy = (data, binding) => {
  const flat = data.flatMap(item => item[binding])

  return new Proxy(data, {
    get(target, prop, receiver) {
      if (prop === '_proxyType') return 'flatMapProxy'
      return Reflect.get(flat, prop, receiver)
    },

    has(target, prop) {
      return Reflect.has(flat, prop)
    },

    deleteProperty(target, prop) {
      return true
    }
  })
}