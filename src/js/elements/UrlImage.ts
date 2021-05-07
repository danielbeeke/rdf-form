import { ElementBase } from './ElementBase'
import { getImageDimensionsByUrl } from '../helpers/getImageDimensionsByUrl'
import { html } from 'https://unpkg.com/uhtml/esm/async.js?module'
import { attributesDiff } from '../helpers/attributesDiff'

export class UrlImage extends ElementBase {

  protected focalPoint: { x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number }
  protected isDragging = false
  protected focalPointDiv: HTMLDivElement = null

  constructor (...args) {
    super(...args)

    const focalPointPrefix = this.form.formDefinition.context.focalPoint

    this.focalPoint = {
      x1: this.itemValues?.[`${focalPointPrefix}x1`]?._,
      y1: this.itemValues?.[`${focalPointPrefix}y1`]?._,
      x2: this.itemValues?.[`${focalPointPrefix}x2`]?._,
      y2: this.itemValues?.[`${focalPointPrefix}y2`]?._,
      x3: this.itemValues?.[`${focalPointPrefix}x3`]?._,
      y3: this.itemValues?.[`${focalPointPrefix}y3`]?._,
      x4: this.itemValues?.[`${focalPointPrefix}x4`]?._,
      y4: this.itemValues?.[`${focalPointPrefix}y4`]?._,
    }
  }

  async on(event: Event) {
    super.on(event);
    const dimensionsEnabled = this.definition['form:dimensions']?.length > 0
    const url = this.value?._

    if (dimensionsEnabled && url) {
      getImageDimensionsByUrl(url).then(({ width, height }) => {
        const dimensionsPrefix = this.form.formDefinition.context.schema

        this.itemValues[`${dimensionsPrefix}width`] = [{ '@value': width }]
        this.itemValues[`${dimensionsPrefix}height`] = [{ '@value': height }]
      })
    }

    this.render()
  }

  input () {
    let image
    const focalPointEnabled = this.definition['form:focalPoint']?.length > 0
    
    const onmousedown = (event: MouseEvent) => {      
      event.preventDefault()
      this.reset()
      this.isDragging = true
      this.reCalc()
      this.focalPoint.x3 = 100 / image.width * event.offsetX
      this.focalPoint.y3 = 100 / image.height * event.offsetY
    }

    const onmousemove = (event: MouseEvent) => {
      if (this.isDragging) {
        this.focalPoint.x4 = 100 / image.width * event.offsetX
        this.focalPoint.y4 = 100 / image.height * event.offsetY
        this.reCalc()
      }
    }

    const onmouseup = (event: MouseEvent) => {
      this.isDragging = false
      const endX = 100 / image.width * event.offsetX
      const endY = 100 / image.height * event.offsetY
      this.reCalc()

      const allowedMouseMove = 4
      if (Math.abs(endX - this.focalPoint.x3) < allowedMouseMove && Math.abs(endY - this.focalPoint.y3) < allowedMouseMove) {
        this.focalPointDiv.removeAttribute('style')
        this.reset()
      }
      else {
        const focalPointPrefix = this.form.formDefinition.context.focalPoint

        this.itemValues[`${focalPointPrefix}x1`] = [{ '@value': this.focalPoint.x1 }]
        this.itemValues[`${focalPointPrefix}y1`] = [{ '@value': this.focalPoint.y1 }]
        this.itemValues[`${focalPointPrefix}x2`] = [{ '@value': this.focalPoint.x2 }]
        this.itemValues[`${focalPointPrefix}y2`] = [{ '@value': this.focalPoint.y2 }]
      }
    }

    return html`
      <div class="top">
        <input 
          ref=${attributesDiff(this.attributes)} 
          .value=${this.value?._ ?? ''} 
          onchange=${(event) => this.on(event)}
          onkeyup=${(event) => this.on(event)}
        />
        ${this.removeButton()}
      </div>

      ${this.value?._ ? 
        focalPointEnabled ? 
        html`
        <div class="image-wrapper">
          <div ref="${element => { this.focalPointDiv = element; this.setStyle() }}" class="focal-point"></div>
          <img 
            src=${this.value?._} 
            onclick="${onclick}" 
            onmousedown="${onmousedown}" 
            onmousemove="${onmousemove}" 
            onmouseup="${onmouseup}" 
            ref="${element => image = element}"
          />
        </div>` : 
        html`<img src=${this.value?._} />`
      : ''}
    `
  }


  item (childTemplates: Array<typeof html> = []) {
    return html`
    <div class="item">
      ${this.input()}
      ${childTemplates}
    </div>`
  }

  setStyle = () => {
    this.focalPointDiv.style.left = this.focalPoint.x1 + '%'
    this.focalPointDiv.style.top = this.focalPoint.y1 + '%'
    this.focalPointDiv.style.width = (this.focalPoint.x2 - this.focalPoint.x1) + '%'
    this.focalPointDiv.style.height = (this.focalPoint.y2 - this.focalPoint.y1) + '%'
  }

  reCalc = () => {
    if (this.focalPoint.x3 === null || this.focalPoint.x4 === null) {
      this.reset()
      this.focalPointDiv.removeAttribute('style')
      return
    }

    this.focalPoint.x1 = Math.round(Math.min(this.focalPoint.x3, this.focalPoint.x4))
    this.focalPoint.x2 = Math.round(Math.max(this.focalPoint.x3, this.focalPoint.x4))
    this.focalPoint.y1 = Math.round(Math.min(this.focalPoint.y3, this.focalPoint.y4))
    this.focalPoint.y2 = Math.round(Math.max(this.focalPoint.y3, this.focalPoint.y4))

    this.setStyle()
  }

  reset () {
    this.focalPoint = { x1: null, y1: null, x2: null, y2: null, x3: null, y3: null, x4: null, y4: null }
  }
}