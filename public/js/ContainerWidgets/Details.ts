import { ContainerWidgetBase } from "./ContainerWidgetBase";
import {lastPart} from "../Helpers";
import { Language } from "../LanguageService";

/**
 * Renders the fields into a HTML details element.
 */
export class Details extends ContainerWidgetBase {

  async render () {
    const name = this.definition?.['@id'] ? lastPart(this.definition['@id']) : 'missing-name'

    return this.html`<details open="${this.definition?.['form:open'] ? true : null}" class="${'container ' + name}">
      <summary>
        <h4>${Language.multilingualValue(this.definition['form:label'])}</h4>
      </summary>
      ${await Promise.all(this.formElements.map(formElement => formElement.templateWrapper()))}
    </details>`
  }
}
