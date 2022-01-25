export const flatMapProxy = (data, binding) => {
  const flat = data.flatMap(item => item[binding])

  return new Proxy(data, {
    get(_target, prop, receiver) {
      if (prop === '_proxyType') return 'flatMapProxy'
      return Reflect.get(flat, prop, receiver)
    },

    has(_target, prop) {
      return Reflect.has(flat, prop)
    },

    deleteProperty() {
      return true
    }
  })
}