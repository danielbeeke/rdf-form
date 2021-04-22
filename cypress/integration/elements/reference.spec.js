describe('reference field', function () {
  it('should be possible to select a search suggestion', function () {
    cy.visit('http://localhost:8070/field.test.html#reference')

    cy.get('rdf-form').shadow()
    .find('.button.edit:first').click()

    cy.get('rdf-form').shadow()
    .find('.button.accept').click()

    cy.get('rdf-form').shadow()
    .find('.button.edit:first').click()

    cy.get('rdf-form').shadow()
    .find('input:first').clear()
    
    cy.get('rdf-form').shadow()
    .find('input:first').type('Sugar', { force: true })

    cy.get('rdf-form').shadow()
    .find('.search-suggestion:nth-child(5)').click()


    cy.document()
    .then($document => {
      const form = $document.querySelector('rdf-form')
      form.addEventListener('submit', (event) => {
        const jsonld = event.detail
        expect(jsonld.proxy['recipe:ingredient'][0]?._).to.equal('http://dbpedia.org/resource/Palm_sugar')
      }, {
        once: true
      })
    })

    cy.get('rdf-form').shadow().find('.button.save').click().wait(100)
  })

  it('should be possible to select a textual search suggestion', function () {
    cy.visit('http://localhost:8070/field.test.html#reference')

    cy.get('rdf-form').shadow()
    .find('.button.edit:last').click()

    cy.get('rdf-form').shadow()
    .find('input').clear()

    cy.get('rdf-form').shadow()
    .find('input').type('Sugar', { force: true })

    cy.get('rdf-form').shadow()
    .find('.search-suggestion:last').click()

    cy.document()
    .then($document => {
      const form = $document.querySelector('rdf-form')
      form.addEventListener('submit', (event) => {
        const jsonld = event.detail
        expect(jsonld.proxy['recipe:ingredient'][3]?._).to.equal('Sugar')
      }, {
        once: true
      })
    })

    cy.get('rdf-form').shadow().find('.button.save').click().wait(100)
  })

  it('should be possible to undo', function () {
    cy.visit('http://localhost:8070/field.test.html#reference')

    cy.get('rdf-form').shadow()
    .find('.button.edit:last').click()

    cy.get('rdf-form').shadow()
    .find('input').clear()

    cy.get('rdf-form').shadow()
    .find('input').type('Sugar', { force: true })

    cy.get('rdf-form').shadow()
    .find('.button.back').click()

    cy.document()
    .then($document => {
      const form = $document.querySelector('rdf-form')
      form.addEventListener('submit', (event) => {
        const jsonld = event.detail
        expect(jsonld.proxy['recipe:ingredient'][3]?._).to.equal('http://dbpedia.org/resource/Garlic')
      }, {
        once: true
      })
    })

    cy.get('rdf-form').shadow().find('.button.save').click().wait(100)
  })
})