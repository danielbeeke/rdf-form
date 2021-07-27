const cachedImageObjects = new WeakMap()

export const getImage = (imageUrl): Promise<HTMLImageElement> => {
  return new Promise(resolve => {
    if (!cachedImageObjects.get(imageUrl)) {
      const image = document.createElement('img')
      image.crossOrigin = 'anonymous'
      image.onload = () => resolve(image)
      image.src = imageUrl
    }
    else {
      resolve(cachedImageObjects.get(imageUrl))
    }    
  })
}
