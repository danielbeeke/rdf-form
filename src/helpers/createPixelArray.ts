export function createPixelArray(pixels, quality = 0) {
  const pixelArray = [];

  for (let i = 0, offset, r, g, b, a; i < pixels.length + 1; i = i + quality) {
      offset = i * 4;
      r = pixels[offset + 0];
      g = pixels[offset + 1];
      b = pixels[offset + 2];
      a = pixels[offset + 3];

      // If pixel is mostly opaque and not white
      if (typeof a === 'undefined' || a >= 125) {
          if (!(r > 250 && g > 250 && b > 250)) {
              /** @ts-ignore */
              pixelArray.push([r, g, b]);
          }
      }
  }
  return pixelArray;
}