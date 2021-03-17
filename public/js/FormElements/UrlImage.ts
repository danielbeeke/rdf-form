import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { html } from '../vendor/uhtml.js'
import { getImageDimensionsByUrl } from '../Helpers'

export class UrlImage extends FormElementBase implements FormElement {

  static type: string = 'url-image'

  public jsonLdValueType = 'value'
  public bindingMapping = {
    width: null,
    height: null,
    x1: null,
    y1: null,
    x2: null,
    y2: null,
  }

  public isDragging = false
  public x1: number
  public y1: number
  public x2: number
  public y2: number
  public x3: number
  public y3: number
  public x4: number
  public y4: number

  async on(event, index) {
    super.on(event, index);
    if (this.Field.dimensions) {
      const url = this.Values.get(index, 'url')?.['@value']

      if (url) {
        getImageDimensionsByUrl(url).then(({ width, height }) => {
          this.Values.set({ '@value': width }, index, 'width')
          this.Values.set({ '@value': height }, index, 'height')
        })
      }
    }
    if (event.type === 'change') this.render()
  }

  async templateItemFooter (index, value) {
    let image, focalPoint
    const url = this.Values.get(index, 'url')?.['@value']

    this.x1 = this.Values.get(index, 'x1')?.['@value'] ?? null
    this.y1 = this.Values.get(index, 'y1')?.['@value'] ?? null
    this.x2 = this.Values.get(index, 'x2')?.['@value'] ?? null
    this.y2 = this.Values.get(index, 'y2')?.['@value'] ?? null

    const reCalc = () => {
      if (this.x3 === null || this.x4 === null) {
        focalPoint.removeAttribute('style')
        return
      }

      this.x1 = Math.round(Math.min(this.x3, this.x4))
      this.x2 = Math.round(Math.max(this.x3, this.x4))
      this.y1 = Math.round(Math.min(this.y3, this.y4))
      this.y2 = Math.round(Math.max(this.y3, this.y4))

      this.Values.set({'@value': this.x1}, index, 'x1')
      this.Values.set({'@value': this.y1}, index, 'y1')
      this.Values.set({'@value': this.x2}, index, 'x2')
      this.Values.set({'@value': this.y2}, index, 'y2')  
      setStyle()
    }

    const setStyle = () => {
      focalPoint.style.left = this.x1 + '%'
      focalPoint.style.top = this.y1 + '%'
      focalPoint.style.width = (this.x2 - this.x1) + '%'
      focalPoint.style.height = (this.y2 - this.y1) + '%'
    }

    const reset = () => {
      this.x1 = null
      this.y1 = null
      this.x2 = null
      this.y2 = null
      this.x3 = null
      this.y3 = null
      this.x4 = null
      this.y4 = null
    }

    const onmousedown = (e) => {      
      reset()
      this.isDragging = true

      e.returnValue = false
      e.preventDefault()
      this.x3 = 100 / image.width * e.offsetX
      this.y3 = 100 / image.height * e.offsetY
      reCalc()
    };

    const onmousemove = (e) => {
      if (this.isDragging) {
        this.x4 = 100 / image.width * e.offsetX
        this.y4 = 100 / image.height * e.offsetY
        reCalc()  
      }
    };

    const onmouseup = (e) => {
      this.isDragging = false
      const endX = 100 / image.width * e.offsetX
      const endY = 100 / image.height * e.offsetY
      reCalc()

      const allowedDelta = 4
      if (Math.abs(endX - this.x3) < allowedDelta && Math.abs(endY - this.y3) < allowedDelta) {
        focalPoint.removeAttribute('style')
        reset()
      }
    };

    return url ? this.html`
      <div class="image-wrapper">
        ${this.Field.dimensions ? html`
          <div ref="${element => { focalPoint = element; setStyle() }}" class="focal-point"></div>
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

  async templateItem (index, value, placeholder = null): Promise<typeof html | HTMLElement> {
    const url = this.Values.get(index, 'url')?.['@value']

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
