import { html } from 'uhtml/async'
import { ElementBase } from './ElementBase'
import { Language, t } from '../core/Language'
import { langCodesToObject, filterLanguages } from '../core/Language'
import { SlimSelect } from '../vendor/slimselect.js'
import { faGlobe, faTimes } from '../helpers/icons'
import { fa } from '../helpers/fa'
import { icon } from '../vendor/fontawesome-svg-core.js'

export class LanguagePicker extends ElementBase {

  protected initiated = false

  protected isDragging = false
  protected dragX = null
  protected newestItem = null

  itemDisplay () {
    return this.item()
  }

  item () {
    const onChange = async (event) => {
      if (!this.initiated) return

      const selectedLanguages = event.currentTarget.slim.selected()
      Language.l10nLanguages = await langCodesToObject(selectedLanguages)
      this.render()
    }

    return html`
    <div class="item">
      <select multiple onchange=${onChange} ref=${element => this.l10nLanguagePicker(element)}></select>
      ${this.uiLanguageSwitcher()}
    </div>`
  }

  l10nLanguagePicker (select) {
    if (select.slim) {
      this.attachEvents(select)
      return
    }

    const initialLanguages = [...Object.entries(Language.l10nLanguages)]
    let deleteIcon = icon(faTimes).html[0]
    const slimSelect = new SlimSelect({
      select: select,
      deselectLabel: deleteIcon,
      beforeOnChange: (values) => {
        const newItem = values.map(value => value.value).find(item => !Object.keys(Language.l10nLanguages).includes(item))
        Language.l10nLanguage = newItem
      },
      ajax: async function (search, callback) {
        const languages = await filterLanguages(search)
        const options = languages.map(language => {
          return {
            text: Language.l10nLanguages?.[language[0]] ?? language[1],
            value: language[0],
          }
        })

        callback(options)
      }
    })

    const selection = initialLanguages.map(([langCode, language]) => {
      return {
        text: Language.l10nLanguages[langCode] ?? language,
        value: langCode,
        mandatory: Language.requiredL10nLanguages.includes(langCode)
      }
    })

    slimSelect.setData([{'placeholder': true, 'text': t.direct('Search for a language').toString() }, ...selection])
    slimSelect.set(selection.map(option => option.value))
    this.attachEvents(select)
    this.initiated = true // Without this it would trigger a needless render.
  }

  attachEvents (select) {
    const langCodes = [...Object.entries(Language.l10nLanguages)].map(([langCode]) => langCode)
    const tabs = [...select.parentElement.querySelectorAll('.ss-value')]
    const tabsWrapper = select.parentElement.querySelector('.ss-multi-selected')

    tabsWrapper.addEventListener('mousedown', (event) => {
      this.isDragging = true
      this.dragX = null
    })

    const setScrollClasses = () => {
      if (!tabsWrapper.scrollWidth) return
      tabsWrapper.classList.remove('hide-left-shadow')
      tabsWrapper.classList.remove('hide-right-shadow')

      if (tabsWrapper.scrollLeft === 0) {
        tabsWrapper.classList.add('hide-left-shadow')
      }

      if (tabsWrapper.scrollWidth - 1 <= tabsWrapper.clientWidth + tabsWrapper.scrollLeft) {
        tabsWrapper.classList.add('hide-right-shadow')
      }
    }

    tabsWrapper.addEventListener('scroll', (event) => {
      setScrollClasses()
    })

    setScrollClasses()
    setTimeout(() => {
      setScrollClasses()
    }, 100);

    tabsWrapper.addEventListener('mousemove', (event) => {
      if (this.isDragging) {
        if (this.dragX !== null) {
          const delta = this.dragX - event.clientX

          tabsWrapper.scrollTo({
            top: 0,
            left: tabsWrapper.scrollLeft + delta
          })
        }

        this.dragX = event.clientX

        event.preventDefault()
        event.stopImmediatePropagation()
      }
    })

    tabsWrapper.addEventListener('click', (event) => {
      if (this.isDragging && this.dragX !== null) {
        event.preventDefault()
        event.stopImmediatePropagation()
      }

      this.isDragging = false
      this.dragX = null
    }, {
      capture: true
    })


    for (const [index, tab] of tabs.entries()) {
      if (tab.querySelector('.ss-value-delete')) tab.querySelector('.ss-value-delete').title = t.direct('Delete all translations for this language').toString()
      if (langCodes[index] === Language.l10nLanguage) tab.classList.add('active')
      if (tab.hasEvent) continue
      tab.hasEvent = true

      tab.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopImmediatePropagation()
        for (const innerTab of tabs) if (innerTab !== tab) innerTab.classList.remove('active')
        tab.classList.add('active')
        Language.l10nLanguage = langCodes[index]
        this.render()    
      })
    }

  }

  uiLanguageSwitcher () {
    return Object.keys(Language.uiLanguages).length ? html`<div class="language-switcher">
      ${fa(faGlobe)}
      <select onchange="${async event => {
        await Language.setUiLanguage(event.target.value)
        this.dispatchEvent(new CustomEvent('language-change'))
        await this.render()
      }}">
        ${Object.entries(Language.uiLanguages).map((language) => {
          const code = language[0]
          const label = language[1]
          return html`<option value="${code}" selected="${code === Language.uiLanguage ? true : null}">${label}</option>`
        })}
      </select></div>
    ` : html``
  }

}