import quantize from 'quantize'
import { getImage } from './getImage'
import { createPixelArray } from './createPixelArray'

export const getImageColor = async (imageUrl) => {
  
  const image: HTMLImageElement = await getImage(imageUrl)

  const canvas = document.createElement('canvas') as HTMLCanvasElement
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0);

  const pixels = context.getImageData(0, 0, image.width, image.height)
  const pixelsData = createPixelArray(pixels.data, 8)
  const colorMap = quantize(pixelsData, 6)
  const colors = colorMap.palette()
  const color = `rgb(${colors[0].join(',')})`

  return { color }
}