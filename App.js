import { parse } from './vendor/ttl2jsonld.js'
import { render, html, Hole } from './vendor/uhtml.js'
import marked from './vendor/marked.js'
import { yaml } from './vendor/yaml.js'
import './vendor/RdfForm.js'

class App {
  constructor() {
    this.chapters = [
      'introduction',
      'overview',
      'properties'
    ]

    this.tokenReplacements = {
      'properties': this.token_properties,
      'form_definition': this.token_form_definition
    }

    this.init()
  }

  async init () {
    this.element = document.querySelector('#app')

    this.pages = new Map()

    for (const chapter of this.chapters) {
      const markdownResponse = await fetch(`/md/${chapter}.md`)
      const markdown = await markdownResponse.text()
      const markdownSplit = markdown.split('---')
      const frontMatterYaml = markdownSplit[1]
      let markdownContent = markdownSplit.splice(2).join("\n")

      for (const [tag, method] of Object.entries(this.tokenReplacements)) {
        if (markdownContent.includes('[' + tag + ']')) {
          const tempElement = document.createElement('div')
          render(tempElement, await method.apply(this))
          markdownContent = markdownContent.replaceAll('[' + tag + ']', tempElement.innerHTML)
          tempElement.remove()
        }
      }

      const htmlContent = marked(markdownContent)

      this.pages.set(chapter, {
        name: chapter,
        html: htmlContent,
        meta: frontMatterYaml ? yaml.parse(frontMatterYaml) : {}
      })
    }

    this.draw()

    import('./vendor/prism.js')

    document.querySelectorAll('pre code').forEach((block) => {
    });
  }

  draw () {
    render(this.element, this.template())
  }

  template () {
    return html`
    <div class="content">
        ${[...this.pages.values()].map(page => new Hole('html', [page.html], []))}
    </div>
    `
  }

  sidebar () {
    return html`
    <ul class="sidebar">
      ${[...this.pages.values()].map(page => html`<li><a href="${'#' + page.name}">${page.meta.link}</a></li>`)}
    </ul>
    `
  }

  async token_properties () {
    const formTtlResponse = await fetch('http://rdf.danielbeeke.nl/form/form-dev.ttl')
    const formTtl = await formTtlResponse.text()
    const jsonld = parse(formTtl)
    const properties = jsonld['@graph']

    return html`
    <div class="properties">
      ${properties.filter(property => property?.['rdf:type']?.['@id'] === 'rdf:Property').map(property => html`
        <div class="property">
          <h4>${property['@id'].split(':')[1]}</h4>
          <p>${new Hole('html', [marked(property?.['rdfs:comment']?.['@value'])], []) ?? ''}</p>
        </div>
      `)}
    </div>`
  }

  async token_form_definition () {
    const formDefinitionTtlResponse = await fetch('http://rdf.danielbeeke.nl/recipe/recipe.form.ttl')
    const formTtl = await formDefinitionTtlResponse.text()
    return html`<pre><code class="language-turtle">${formTtl}</code></pre>`
  }
}

new App()
