export const lastPart = (text) => {
  return text.split(/\:|\/|\,|\#/).pop()
}