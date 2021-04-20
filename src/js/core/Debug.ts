export const expandProxiesInConsole = () => {
  const originalConsoleLog = console.log
  console.log = (...rawInputs) => {
    const inputs = [...rawInputs]
    for (let [index, input] of inputs.entries()) {
      if (input?.isProxy) inputs[index] = input.$
    }
    originalConsoleLog(...inputs)
  }
}