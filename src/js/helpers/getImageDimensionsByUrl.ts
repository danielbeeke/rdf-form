import { getImage } from './getImage'

export const getImageDimensionsByUrl = async (imageUrl) => {

  const image: HTMLImageElement = await getImage(imageUrl)

  return {
    width: image.width,
    height: image.height
  }

}