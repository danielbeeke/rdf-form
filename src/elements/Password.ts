import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'
import { zxcvbn, ZxcvbnOptions } from '@zxcvbn-ts/core';
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import zxcvbnPackage from '@zxcvbn-ts/language-en'
import { t } from '../core/Language'

export class Password extends ElementBase {

  protected password: string = ''
  protected passwordConfirm: string = ''
  protected passwordInput: HTMLInputElement
  protected passwordConfirmInput: HTMLInputElement
  protected score: number = 0
  protected suggestions: Array<string> = []

  constructor (...args) {
    super(...args)
    const options = {
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnPackage.dictionary,
      },
      translations: zxcvbnPackage.translations,
    }
    ZxcvbnOptions.setOptions(options)
  }

  on (event, fieldName: string | null = null) {
    if (fieldName) this[fieldName] = event.target.value
    if (['keyup', 'change'].includes(event.type)) {
      if (!this.value) this.addItem()
      if (this.value) this.value[`@${this.jsonldKey}`] = this.password
    }

    this.validate()
  }

  input () {
    const scoreTexts = [
      t`poorest (1 / 5)`,
      t`poor (2 / 5)`,
      t`Bad (3 / 5)`,
      t`Okayish (4 / 5)`,
      t`Strong (5 / 5)`,
    ]

    return html`
    <div class="column">
    <input
      ref=${element => this.passwordInput = element}
      onchange="${event => this.on(event, 'password')}"
      onkeyup="${event => this.on(event, 'password')}"
      type="password"
      required
      novalidate
      autocomplete="off"
    >
    <p>${t`Password quality: ${{ quality: scoreTexts[this.score]}}`}</p>
    ${this.suggestions.length ? html`
    <ul>
      ${this.suggestions.map(suggestion => html`<li>${suggestion}</li>`)}
    </ul>
    ` : html``}

    </div>

    <div class="column">
    <input
      novalidate
      ref=${element => this.passwordConfirmInput = element}
      onchange="${event => this.on(event, 'passwordConfirm')}"
      onkeyup="${event => this.on(event, 'passwordConfirm')}"
      type="password"
      required
      autocomplete="off"
    >
    </div>
`
  }

  validate () {
    if (this.password === this.passwordConfirm && this.password) {
      this.passwordConfirmInput.setCustomValidity('')
    }
    else {
      this.passwordConfirmInput.setCustomValidity(t.direct('The passwords do not match').toString())
    }
    
    const zxcvbn = this.password ? this.getScore(this.password) : null
    /** @ts-ignore */
    this.score = zxcvbn?.score ?? 0
    /** @ts-ignore */
    this.suggestions = zxcvbn?.feedback?.suggestions ?? []
    this.debouncedRender()
  }

  getScore (password) {
    return zxcvbn(password)
  }

}