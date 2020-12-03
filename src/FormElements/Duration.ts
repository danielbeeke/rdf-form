import { FormElement } from '../Types'
import { FormElementBase } from './FormElementBase'
import { parse, serialize, Duration as IDuration } from 'tinyduration/src/index';
import { t } from "../LanguageService";

const units = {
  period: [
    { unit: 'years', symbol: 'Y' },
    { unit: 'months', symbol: 'M' },
    { unit: 'weeks', symbol: 'W' },
    { unit: 'days', symbol: 'D' },
  ],
  time: [
    { unit: 'hours', symbol: 'H' },
    { unit: 'minutes', symbol: 'M' },
    { unit: 'seconds', symbol: 'S' },
  ]
}

export class Duration extends FormElementBase implements FormElement {

  static type: string = 'duration'

  private duration: IDuration
  private allowedUnits = []

  async init () {
    await super.init()
    const rangePeriods = this.Field.range.split('T')[0]
    const rangeTime = this.Field.range.split('T')[1]

    if (!rangeTime && !rangeTime) {
      this.allowedUnits = [...units.time, ...units.period]
    }
    else {
      this.allowedUnits = [
        ...units.period.filter(unit => rangePeriods?.includes(unit.symbol)),
        ...units.time.filter(unit => rangeTime?.includes(unit.symbol))
      ]
    }
  }

  async templateItem (index, value, placeholder = null) {
    this.duration = parse(value?.['@value'] ?? 'PT0M')

    const fields = []

    if (this.Field.range.substr(0, 1) === '-') {
      fields.push(this.html`
      <div classy:sub-item="sub-item">
        <label classy:label="label">${t`Type`}</label>
        <select>
            ${['-', '+'].map(option => this.html`<option selected="${this.duration.negative && option === '-' || !this.duration.negative && option === '+' ? true : null}" value="${option}">${option}</option>`)}
        </select>
      </div>
    `)
    }

    for (const unitType of this.allowedUnits) {
      const value = this.duration[unitType.unit] ?? 0
      const label = unitType.unit.substr(0, 1).toUpperCase() + unitType.unit.substr(1)

      fields.push(this.html`
      <div classy:sub-item="sub-item">
        <label classy:label="label">${t.direct(label)}</label>
        <input
          onchange="${event => this.on(event, index, unitType.unit)}"
          onkeyup="${event => this.on(event, index, unitType.unit)}"
          type="number"
          value="${value !== null ? value : 0}"
          placeholder="${placeholder ?? this.Field.placeholder}"
          required="${this.isRequired(index)}"
        >
      </div>
      `)
    }

    return fields
  }

  on (event, index, type = null) {
    if (['keyup', 'change'].includes(event.type)) {
      if (parseInt(event.target.value)) {
        this.duration[type] = parseInt(event.target.value)
      }

      this.Values.setValue(serialize(this.duration), index)
    }

    this.dispatchEvent(new CustomEvent(event.type, {
      detail: {
        originalEvent: event,
        index: index,
        value: event.target.value
      }
    }))
  }

}
