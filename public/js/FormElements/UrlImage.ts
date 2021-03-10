import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { html } from '../vendor/uhtml.js'
import { lastPart, getImageDimensionsByUrl } from '../Helpers'

export class UrlImage extends FormElementBase implements FormElement {

  static type: string = 'url-image'

  public jsonLdValueType = 'value'
  private imageObjects = new Map()

  on(event, index) {
    super.on(event, index);
    if (event.type === 'change') this.render()
  }

  async templateItemFooter (index, value) {
    const textValue = value?.['@' + this.jsonLdValueType] ?? value?.['https://schema.org/url']?.[0]?.['@value']

    return textValue ? this.html`<img src="${textValue}" />` : ''
  }

  async templateItem (index, value, placeholder = null): Promise<typeof html | HTMLElement> {
    const textValue = value?.['@' + this.jsonLdValueType] ?? value?.['https://schema.org/url']?.[0]?.['@value'] ?? value

    return this.html`
    <input
      onchange="${event => this.on(event, index)}"
      onkeyup="${event => this.on(event, index)}"
      type="text"
      placeholder="${placeholder ?? this.Field.placeholder}"
      .value="${textValue}"
      required="${this.isRequired(index)}"
    >`
  }

  async serialize () {
    if (this.Values.bindings.length > 1) {
      const baseValues = this.Values.getAll(this.Values.defaultBinding)

      if (this.Values.bindings.some(binding => lastPart(binding) === 'width' || lastPart(binding) === 'height')) {
        const bindingMapping = {
          width: null,
          height: null,
        }
        
        for (const binding of this.Values.bindings) {
          if (lastPart(binding) === 'width') bindingMapping.width = binding
          if (lastPart(binding) === 'height') bindingMapping.height = binding
        }

        for (const [index, baseValue] of baseValues.entries()) {
          const imageUrl = baseValue['https://schema.org/url']?.[0]?.['@value'] ?? baseValue?.['@value']

          if (imageUrl) {
            const { width, height } = await getImageDimensionsByUrl(imageUrl)
          
            if (bindingMapping.width && width) this.Values.set({ '@value': width }, index, bindingMapping.width)
            if (bindingMapping.height && height) this.Values.set({ '@value': height }, index, bindingMapping.height)  
          }
        }
      }

      const finalValues = []

      for (const binding of this.Values.bindings) {
        for (const [index, value] of this.Values.getAll(binding).entries()) {
          if (!finalValues[index]) finalValues[index] = {}
          const bindingToUse = binding === 'https://schema.org/image' ? 'https://schema.org/url' : binding
          finalValues[index][bindingToUse] = value
        }
      }

      return finalValues
    }
    else {
      const values = this.Values.getAll()
      return values.length ? values : null  
    }
  }

}
