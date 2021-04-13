import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { html } from '../vendor/uhtml.js'
import { getImageDimensionsByUrl } from '../helpers/getImageDimensionsByUrl'

export class UrlImage extends FormElementBase implements FormElement {

  static type: string = 'url-image'
  public jsonLdValueType = 'value'
  
  public isDragging = false

  private focalPoints: Map<number, {x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number}> = new Map()

  async on(event: Event, index: number) {
    super.on(event, index);
    if (this.Field.dimensions) {
      const url = this.Values.getValue(index)

      if (url) {
        getImageDimensionsByUrl(url).then(({ width, height }) => {
          this.Values.setValue(width, index, 'width')
          this.Values.setValue(height, index, 'height')
        })
      }
    }
    if (event.type === 'change') this.render()
  }

  reset (index: number) {
    this.focalPoints.set(index, { x1: null, y1: null, x2: null, y2: null, x3: null, y3: null, x4: null, y4: null })
  }

  getFocalPoint (index: number) {
    if (!this.focalPoints.has(index)) this.reset(index)
    return this.focalPoints.get(index)
  }

  reCalc = (focalPointDiv: HTMLDivElement, index: number, focalPoint) => {
    if (focalPoint.x3 === null || focalPoint.x4 === null) {
      this.reset(index)
      focalPointDiv.removeAttribute('style')
      return
    }

    focalPoint.x1 = Math.round(Math.min(focalPoint.x3, focalPoint.x4))
    focalPoint.x2 = Math.round(Math.max(focalPoint.x3, focalPoint.x4))
    focalPoint.y1 = Math.round(Math.min(focalPoint.y3, focalPoint.y4))
    focalPoint.y2 = Math.round(Math.max(focalPoint.y3, focalPoint.y4))

    this.setStyle(focalPointDiv, focalPoint)
  }

  setStyle = (focalPointDiv: HTMLDivElement, focalPoint) => {
    focalPointDiv.style.left = focalPoint.x1 + '%'
    focalPointDiv.style.top = focalPoint.y1 + '%'
    focalPointDiv.style.width = (focalPoint.x2 - focalPoint.x1) + '%'
    focalPointDiv.style.height = (focalPoint.y2 - focalPoint.y1) + '%'
  }

  async templateItemFooter (index: number) {
    let image, focalPointDiv
    const focalPoint = this.getFocalPoint(index)

    const url = this.Values.getValue(index)

    focalPoint.x1 = this.Values.getValue(index, 'x1')
    focalPoint.y1 = this.Values.getValue(index, 'y1')
    focalPoint.x2 = this.Values.getValue(index, 'x2')
    focalPoint.y2 = this.Values.getValue(index, 'y2')

    const onmousedown = (event: MouseEvent) => {      
      event.preventDefault()
      this.reset(index)
      this.isDragging = true
      this.reCalc(focalPointDiv, index, focalPoint)
      focalPoint.x3 = 100 / image.width * event.offsetX
      focalPoint.y3 = 100 / image.height * event.offsetY
    }

    const onmousemove = (event: MouseEvent) => {
      if (this.isDragging) {
        focalPoint.x4 = 100 / image.width * event.offsetX
        focalPoint.y4 = 100 / image.height * event.offsetY
        this.reCalc(focalPointDiv, index, focalPoint)
      }
    }

    const onmouseup = (event: MouseEvent) => {
      this.isDragging = false
      const endX = 100 / image.width * event.offsetX
      const endY = 100 / image.height * event.offsetY
      this.reCalc(focalPointDiv, index, focalPoint)

      const allowedDelta = 4
      if (Math.abs(endX - focalPoint.x3) < allowedDelta && Math.abs(endY - focalPoint.y3) < allowedDelta) {
        focalPointDiv.removeAttribute('style')
        this.reset(index)
      }
      else {
        this.Values.setValue(focalPoint.x1, index, 'x1')
        this.Values.setValue(focalPoint.y1, index, 'y1')
        this.Values.setValue(focalPoint.x2, index, 'x2')
        this.Values.setValue(focalPoint.y2, index, 'y2')    
      }
    }

    return url ? this.html`
      <div class="image-wrapper">
        ${this.Field.dimensions ? html`
          <div ref="${element => { focalPointDiv = element; this.setStyle(focalPointDiv, focalPoint) }}" class="focal-point"></div>
        ` : ''}
        <img 
          onclick="${onclick}" 
          onmousedown="${onmousedown}" 
          onmousemove="${onmousemove}" 
          onmouseup="${onmouseup}" 
          ref="${element => image = element}"
          src="${url}" />
      </div>
    ` : ''
  }

  async templateItem (index: number, value, placeholder = null): Promise<typeof html | HTMLElement> {
    const url = this.Values.getValue(index)

    return this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${url}"
      required="${this.isRequired(index)}"
    >`
  }

}
