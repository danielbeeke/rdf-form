export const flatMapProxy = (data, binding) => {
  const flat = data.flatMap(item => item[binding])

  return new Proxy(data, {
    get(target, prop, receiver) {
      return Reflect.get(flat, prop, receiver)
    }
  })
}