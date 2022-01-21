import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'
import { lastPart } from '../helpers/lastPart'
import { importGlobalScript } from '../helpers/importGlobalScript'
import { kebabize } from '../helpers/kebabize'
import { attributesDiff } from '../helpers/attributesDiff'
import { t, Language } from '../core/Language'

export class Urls3 extends ElementBase {

  private uppy: any

  constructor (...args) {
    super(...args)
    this.attributes.type = 'url'

    const url = 'https://releases.transloadit.com/uppy/v2.4.1/uppy.min.css'
    this.form.renderer.extraStylesheets.add(url)
  }

  async wrapper (innerTemplates: Array<typeof html> = [], isDisplayOnly = false) {
    if (isDisplayOnly) return super.wrapper(innerTemplates)
    const Uppy = await importGlobalScript('https://releases.transloadit.com/uppy/v2.4.1/uppy.js', 'Uppy')

    const values = this.parentValues?.[this.mainBinding]

    const template = html`
    <div onclick=${[(event) => {
      const element = event.originalTarget.closest('.uppy-Dashboard-Item-action--remove')
      if (element) {
        const result = confirm(t.direct(`Are you sure?`))
        if (!result) event.stopPropagation()  
      }
    }, { capture: true }]} ref=${element => {
      if (!this.uppy) {

        this.uppy = new Uppy.Core()
        .use(Uppy.Dashboard, {
          inline: true,
          hideCancelButton: true,
          showRemoveButtonAfterComplete: true,
          target: element
        })
        .use(Uppy.AwsS3Multipart, {
          limit: 4,
          companionUrl: this.definition['form:uppyCompanion']?._,
        })

        for (const value of values) {
          this.uppy.addFile({
            name: lastPart(value?._),
            data: '', // file blob
            isRemote: true,
          })    
        }

        this.uppy.on('file-removed', (file, reason) => {
          if (reason === 'removed-by-user') {
            this.form.dispatchEvent(new CustomEvent('file-deleted-uppy', {
              detail: file
            }))
          }
        })

        this.uppy.getFiles().forEach(file => {
          this.uppy.setFileState(file.id, { 
            progress: { uploadComplete: true, uploadStarted: true } 
          })
        })
      }
    }} class="drag-and-drop-area"></div>`

    return super.wrapper([template])
  }

}