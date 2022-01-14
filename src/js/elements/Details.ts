import { ElementBase } from './ElementBase'
import { html, render } from 'uhtml/async'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'

export class Details extends ElementBase {
  
  constructor (...args: any[]) {
    super(...args)

    const childValues = [...this.children.values()].flatMap(([fieldDefinition]) => {
      const childBinding = fieldDefinition['form:binding']?._
      if (childBinding && this.parentValues[childBinding]?._) {
        return this.parentValues[childBinding]?.$
      }
    }).filter(item => item)

    console.log(this.wrapperAttributes.open)

    if (!('open' in this.wrapperAttributes) && (
      this.mainBinding && this.parentValues?.[this.mainBinding]?.length || 
      !this.mainBinding && childValues.length
    )) {
      this.wrapperAttributes.open = true
    }

  }

  input () { return html`` }

  async wrapper (innerTemplates: Array<typeof html> = [], isDisplayOnly = false) {

    if (isDisplayOnly) {
      const resolvedInnerTemplates = await Promise.all(innerTemplates)
      const tester = document.createElement('div')
      await render(tester, html`${resolvedInnerTemplates}`)
      const text = tester.innerText.replace(/\n|\r/g, '').trim()

      if (text === '') return html``
    }

    const toggle = () => {
      this.wrapperAttributes.open = !this.wrapperAttributes.open
    }

    const type = kebabize(this.constructor.name)
    return html`
    <details ref=${attributesDiff(this.wrapperAttributes)} type="${type}">
      <summary onclick=${toggle}>${this.label()}</summary>
      ${innerTemplates.length ? html`
        <div class="items">
          ${innerTemplates}
        </div>
      ` : ''}
    </div>`
  }
}