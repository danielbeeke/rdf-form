export const isFetchable = (string) => {
  return string.startsWith('http') || string.startsWith('blob') || string.substr(0, 1) === '/'
}