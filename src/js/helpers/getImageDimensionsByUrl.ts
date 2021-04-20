const cachedImageObjects = new WeakMap()
export const getImageDimensionsByUrl = async (imageUrl) => {
  const getImage = (imageUrl): Promise<HTMLImageElement> => {
    return new Promise(resolve => {
      if (!cachedImageObjects.get(imageUrl)) {
        const image = document.createElement('img')
        image.onload = () => resolve(image)
        image.src = imageUrl
      }
      else {
        resolve(cachedImageObjects.get(imageUrl))
      }    
    })
  }

  const image: HTMLImageElement = await getImage(imageUrl)

  return {
    width: image.width,
    height: image.height
  }

}