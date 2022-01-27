import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'
import { importGlobalScript } from '../helpers/importGlobalScript'
import { t } from '../core/Language'

const instances = new Map()

export class UrlUppy extends ElementBase {

  public uppy: any

  constructor (...args) {
    super(...args)
    this.attributes.type = 'url'

    const url = 'https://releases.transloadit.com/uppy/v2.4.1/uppy.min.css'
    this.form.renderer.extraStylesheets.add(url)
  }

  async wrapper (innerTemplates: Array<typeof html> = [], isDisplayOnly = false) {
    if (isDisplayOnly) return super.wrapper(innerTemplates)
    const Uppy = await importGlobalScript('https://releases.transloadit.com/uppy/v2.4.1/uppy.js', 'Uppy')

    // // We need to this trickery because the parent can be a container and 
    // // we are things inside of the wrapper instead of the item where things are normalized.
    // const parentIsAContainer = this.parent.definition['@type'].$.some(item => lastPart(item) === 'Container')
    // const parentValues = parentIsAContainer ? this.parent.parentValues[this.parent.mainBinding].$ : this.parentValues?.[this.mainBinding]?.$
    // const values = (parentValues ?? [])
    //   .filter(value => value && !value['@language'] || value && value['@language'] === Language.l10nLanguage)
    //   // get the item from the container group, if needed
    //   .map(item => parentIsAContainer ? item[this.mainBinding][0] : item)
    //   .map(item => item?.['@value'] ?? item?.['@id'])
    //   .filter(onlyUnique)
  
    // console.log(values)

    const template = html`
    <div onclick=${[(event) => {
      const element = event?.explicitOriginalTarget?.closest('.uppy-Dashboard-Item-action--remove')
      if (element) {
        const result = confirm(t.direct(`Are you sure?`))
        if (!result) event.stopPropagation()  
      }
    }, { capture: true }]} ref=${element => {
      if (!instances.has(this.definition['@id'])) {

        console.log(this)

        this.uppy = new Uppy.Core({
          id: this.definition['@id']
        })
        .use(Uppy.ThumbnailGenerator, {
          thumbnailWidth: 200,
          waitForThumbnailsBeforeUpload: false,
        })
        .use(Uppy.Url, {
          companionUrl: this.definition['form:uppyCompanion']?._,
        })
        .use(Uppy.Dashboard, {
          inline: true,
          hideCancelButton: true,
          showRemoveButtonAfterComplete: true,
          target: element,
          plugins: ['Url']
        })
        .use(Uppy.AwsS3Multipart, {
          limit: 4,
          companionUrl: this.definition['form:uppyCompanion']?._,
        })

        // for (const value of values) {
        //   try {
        //     const url = new URL(value)
        //     const name = url.pathname.substr(1)
  
        //     this.uppy.addFile({
        //       name,
        //       meta: {
        //         relativePath: value
        //       },
        //       data: '',
        //       isRemote: true,
        //     })      
        //   }
        //   catch (exception) {
        //     console.log(value)
        //     console.error(exception)
        //   }
        // }

        this.uppy.on('file-removed', (file, reason) => {
          if (reason === 'removed-by-user') {
            this.form.dispatchEvent(new CustomEvent('file-deleted', {
              detail: { file }
            }))
          }
        })

        this.uppy.on('upload-success', (file, response) => {
          this.form.dispatchEvent(new CustomEvent('file-added', {
            detail: { file, response }
          }))
        })

        this.uppy.getFiles().forEach(file => {
          const image = new Image()
          image.onload = () => this.uppy.setFileState(file.id, { preview: file.meta.relativePath })  
          image.src = file.meta.relativePath

          this.uppy.setFileState(file.id, { 
            progress: { uploadComplete: true, uploadStarted: true } 
          })
        })

        instances.set(this.definition['@id'], this.uppy)
      }
      else {
        this.uppy = instances.get(this.definition['@id'])
      }
    }} class="drag-and-drop-area"></div>`

    return super.wrapper([template])
  }

  addButton () {
    return null
  }

}