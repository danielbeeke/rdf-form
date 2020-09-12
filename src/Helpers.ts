export const findInSet = (pred, set) => {
  for (let item of set) if (pred(item)) return item
}

export const filterInSet = (pred, set) => {
  let found = []
  for (let item of set) if (pred(item)) found.push(item)
  return found
}
