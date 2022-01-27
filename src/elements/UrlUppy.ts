import { ElementBase } from './ElementBase'
import { html } from 'uhtml/async'
import { importGlobalScript } from '../helpers/importGlobalScript'
import { t } from '../core/Language'

function assertServerError (res) {
  if (res && res.error) {
    const error = new Error(res.message)
    Object.assign(error, res.error)
    throw error
  }
  return res
}

const instances = new Map()

export class UrlUppy extends ElementBase {

  public uppy: any

  constructor (...args) {
    super(...args)
    this.attributes.type = 'url'

    const url = 'https://releases.transloadit.com/uppy/v2.4.1/uppy.min.css'
    this.form.renderer.extraStylesheets.add(url)
  }

  removeFile (event: MouseEvent) {
    /** @ts-ignore */
    const element = event?.target?.closest('.uppy-Dashboard-Item-action--remove')
    if (element) {
      const result = confirm(t.direct(`Are you sure?`))
      if (!result) event.stopPropagation()  
    }
  }

  async getUppy (id) {
    if (instances.has(id)) return await instances.get(id)
    const promise = this.createUppy()
    instances.set(id, promise)
    return promise
  }

  async createUppy () {
    const Uppy = await importGlobalScript('https://releases.transloadit.com/uppy/v2.4.1/uppy.js', 'Uppy')
    const element = document.createElement('div')

    const definition = this.definition

    const uppy = new Uppy.Core({ id: this.definition['@id'] })
    .use(Uppy.ThumbnailGenerator, {
      thumbnailWidth: 200,
      waitForThumbnailsBeforeUpload: false,
    })
    .use(Uppy.Url, { companionUrl: this.definition['form:uppyCompanion']?._ })
    .use(Uppy.Dashboard, {
      inline: true,
      hideCancelButton: true,
      showRemoveButtonAfterComplete: true,
      target: element,
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
          filename: uppyDomainUrl.pathname.substr(1) + '/' + file.name,
          type: file.type,
          metadata,
        }).then(assertServerError)
      },
      companionUrl: this.definition['form:uppyCompanion']?._,
    })

    uppy.on('file-removed', (file, reason) => {
      if (reason === 'removed-by-user') {
        this.parentValues[this.mainBinding].splice(file.meta.index, 1)

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
      this.form.dispatchEvent(new CustomEvent('file-added', {
        detail: { file, response }
      }))
    })

    uppy.rdfFormElement = element
    return uppy
  }

  async addFileToJsonLd (file) {
    const uppy = await this.getUppy(this.definition['@id'])

    uppy.setFileState(file.id, { 
      progress: { uploadComplete: true, uploadStarted: true } 
    })

    file.meta.index = this.parentValues[this.mainBinding].length
    await this.addItem()
    this.parentValues[this.mainBinding][file.meta.index]['@' + this.jsonldKey] = file.meta.relativePath  
  }

  async wrapper (innerTemplates: Array<typeof html> = [], isDisplayOnly = false) {
    if (isDisplayOnly) return super.wrapper(innerTemplates)
    const uppy = await this.getUppy(this.definition['@id'])
    const template = html`
    <div onclick=${[this.removeFile.bind(this), { capture: true }]} class="drag-and-drop-area">${uppy.rdfFormElement}</div>`
    return super.wrapper([template])
  }

  addButton () {
    return null
  }

  async item () {
    const uppy = await this.getUppy(this.definition['@id'])

    if (this.value._) {
      const url = new URL(this.value._)
      const name = url.pathname.substr(1)

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
    }

    await this.refreshPreviews()

    return null
  }

  async refreshPreviews () {
    const uppy = await this.getUppy(this.definition['@id'])

    uppy.getFiles().forEach(file => {
      const image = new Image()
      image.onload = () => uppy.setFileState(file.id, { preview: file.meta.relativePath })  
      image.src = file.meta.relativePath
    })
  }

}