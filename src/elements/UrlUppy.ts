import { html } from 'uhtml/async'
import { importGlobalScript } from '../helpers/importGlobalScript'
import { Language, t } from '../core/Language'
import { UrlImage } from './UrlImage'

function assertServerError (res) {
  if (res && res.error) {
    const error = new Error(res.message)
    Object.assign(error, res.error)
    throw error
  }
  return res
}

const uppys = new Map()
const instances = new Set()
const failedPreviews = new Set()

export class UrlUppy extends UrlImage {

  public uppy: any

  constructor (...args) {
    super(...args)
    this.attributes.type = 'url'

    const url = 'https://releases.transloadit.com/uppy/v2.4.1/uppy.min.css'
    this.form.renderer.extraStylesheets.add(url)
  }

  clickEvents (event: MouseEvent) {
    /** @ts-ignore */
    const removeButton = event?.target?.closest('.uppy-Dashboard-Item-action--remove')
    if (removeButton) {
      const result = confirm(t.direct(`Are you sure?`))
      if (!result) event.stopPropagation()  
    }
  }

  async getUppy (id) {
    if (uppys.has(id)) return await uppys.get(id)
    const promise = this.createUppy()
    uppys.set(id, promise)
    return promise
  }
  
  async createUppy () {
    const Uppy = await importGlobalScript('https://releases.transloadit.com/uppy/v2.4.1/uppy.js', 'Uppy')
    const element = document.createElement('div')

    const definition = this.definition

  
    const uppy = new Uppy.Core({ 
      id: location.pathname + this.definition['@id'] + Language.l10nLanguage,
      allowedFileTypes: []
    })
    .use(Uppy.Url, { companionUrl: this.definition['form:uppyCompanion']?._ })
    .use(Uppy.Dashboard, {
      inline: true,
      hideCancelButton: true,
      showRemoveButtonAfterComplete: true,
      target: element,
      proudlyDisplayPoweredByUppy: false,
      plugins: ['Url']
    })
    .use(Uppy.AwsS3Multipart, {
      limit: 4,
      createMultipartUpload: function (file) {
        this.assertHost('createMultipartUpload')
        
        const metadata = {}
    
        Object.keys(file.meta).forEach(key => {
          if (file.meta[key] != null) {
            metadata[key] = file.meta[key].toString()
          }
        })
    
        const uppyDomain = definition['form:uppyDomain']._
        const uppyDomainUrl = new URL(uppyDomain)

        return this.client.post('s3/multipart', {
          filename: uppyDomainUrl.pathname.substr(1) + file.name,
          type: file.type,
          metadata,
        }).then(assertServerError)
      },
      companionUrl: this.definition['form:uppyCompanion']?._,
    })

    uppy.on('file-removed', async (file, reason) => {
      if (reason === 'removed-by-user') {

        const parentIsGroup = this.parent.constructor.name === 'Container' && this.definition['form:type']
        const values = parentIsGroup ? this.parent.parentValues[this.parent.mainBinding] : this.parentValues[this.mainBinding]
        values?.splice(file.meta.index, 1)

        await this.form.renderer.render()

        this.form.dispatchEvent(new CustomEvent('file-deleted', {
          detail: { file }
        }))
      }
    })

    uppy.on('file-added', async (file) => {
      if (!file.meta.relativePath && file.remote?.body?.url) {
        file.meta.relativePath = file.remote.body.url
      }

      const uppyDomain = this.definition['form:uppyDomain']._
     
      if (file.meta?.relativePath && !file.meta.relativePath.includes(uppyDomain)) {
        if (!('index' in file.meta)) {
          await this.addFileToJsonLd(file)
        }
      }

      this.refreshPreviews()
    })

    uppy.on('upload-success', async (file, response) => {
      const uppyDomain = this.definition['form:uppyDomain']._
      file.meta.relativePath = uppyDomain + response.body.location
      await this.addFileToJsonLd(file)
      await this.form.renderer.render()
      this.form.dispatchEvent(new CustomEvent('file-added', {
        detail: { file, response }
      }))
    })

    uppy.rdfFormElement = element
    return uppy
  }

  async addFileToJsonLd (file) {
    const uppy = await this.getUppy(this.definition['@id'] + Language.l10nLanguage)

    uppy.setFileState(file.id, { 
      progress: { uploadComplete: true, uploadStarted: true } 
    })

    const parentIsGroup = this.parent.constructor.name === 'Container' && this.definition['form:type']?._
    const values = parentIsGroup ? this.parent.parentValues[this.parent.mainBinding] : this.parentValues[this.mainBinding]

    file.meta.index = values.length
    await this.addItem()
    values[file.meta.index]['@' + this.jsonldKey] = file.meta.relativePath  
  }

  async wrapper (innerTemplates: Array<typeof html> = [], isDisplayOnly = false) {
    if (isDisplayOnly) return super.wrapper(innerTemplates)

    const uppy = await this.getUppy(this.definition['@id'] + Language.l10nLanguage)

    const template = html`
    <div ref=${() => {
      const inner = uppy.rdfFormElement.querySelector('.uppy-Dashboard-inner')
      if (inner) {
        inner.style.width = 'auto'
        inner.style.height = 'auto'

        const addMore = inner.querySelector('.uppy-DashboardContent-addMore')

        addMore?.classList.add('button')
        addMore?.classList.add('primary')
        addMore?.classList.remove('uppy-DashboardContent-addMore')

        const plusIcon = addMore?.querySelector('.uppy-c-icon')
        plusIcon?.classList.add('icon')
        plusIcon?.classList.remove('uppy-c-icon')

        const back = inner.querySelector('.uppy-DashboardContent-back')
        back?.classList.remove('.uppy-DashboardContent-back')
        back?.classList.add('button')
        back?.classList.add('primary')

      }
    }} onclick=${[this.clickEvents.bind(this), { capture: true }]}>${uppy.rdfFormElement}</div>`
    return super.wrapper([template, ...innerTemplates])
  }

  addButton () {
    return null
  }

  async item () {
    const uppy = await this.getUppy(this.definition['@id'] + Language.l10nLanguage)

    if (!instances.has(this) && this.value?._) {
      const url = new URL(this.value._)
      const name = url.pathname.substr(1)

      try {
        const fileId = uppy.addFile({
          name,
          meta: {
            relativePath: this.value._,
            index: this.index
          },
          data: '',
          isRemote: true,
        })
  
        uppy.setFileState(fileId, { 
          progress: { uploadComplete: true, uploadStarted: true } 
        })
  
        instances.add(this)  
      }
      catch (exception) {
        console.log(exception)
      }
    }

    await this.refreshPreviews()
    return html``
  }

  async refreshPreviews () {
    // const focalPointEnabled = this.definition['form:focalPoint']?.length > 0

    const uppy = await this.getUppy(this.definition['@id'] + Language.l10nLanguage)

    uppy.getFiles().forEach((file) => {
      if (!failedPreviews.has(file.meta.relativePath)) {
        const image = new Image()
        image.onload = () => uppy.setFileState(file.id, { preview: file.meta.relativePath })  
        image.onerror = () => failedPreviews.add(file.meta.relativePath)
        image.src = file.meta.relativePath  
      }

      setTimeout(() => {
        const images = [...uppy.rdfFormElement.querySelectorAll('.uppy-Dashboard-Item-previewImg')]
        for (const image of images) this.attachImageEvents(image)
      }, 800)

    })
  }

}