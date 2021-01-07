import { SlimSelect as SlimSelectLibrary } from "../vendor/slimselect.js";

class SlimSelect extends HTMLSelectElement {

  private slim: any

  connectedCallback () {
    const options: any = {
      select: this,
    }

    if (this.getAttribute('allow-add') !== null) {
      options.addable = (value = null) => {
        const event = new CustomEvent('add', { detail: value })
        this.dispatchEvent(event)
        return event.detail
      }
    }

    if (this.getAttribute('ajaxsearch') !== null) {
      options.ajax = (search, callback) => {
        const event = new CustomEvent('ajaxsearch', { detail: {
            callback,
            target: this,
            search
        }})
        this.dispatchEvent(event)
      }
    }

    if (this.getAttribute('selected')) {
      const selection = JSON.parse(this.getAttribute('selected'))
      options.data = Object.entries(selection).map(([value, text]) => {
        return { value, text }
      })
    }


    this.slim = new SlimSelectLibrary(options)
    this.slim.set(options.data.map(item => item.value))
  }
}

customElements.define('slim-select', SlimSelect, { extends: 'select' })
