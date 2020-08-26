import { newEngine } from '@comunica/actor-init-sparql'

export class RdfForm extends HTMLElement {

  constructor() {
    super();

    const initRdf = this.getAttribute('rdf')
    if (!initRdf) throw new Error('No rdf given to init from')

    console.log(newEngine)
  }

}

customElements.define('rdf-form', RdfForm);
