export const streamToString = (stream: NodeJS.ReadableStream): any => {
  return new Promise((resolve) => {
    let output = ''
    stream.on('data', (part) => output += part)
    stream.on('end', () => {
      resolve(output)
    })  
  })
}