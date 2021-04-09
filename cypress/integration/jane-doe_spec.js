describe('It fetches the ttl data correctly', function () {
  it('Checks for data coming from the ttl', function () {
    cy.visit('http://localhost:8070/person-form.html')

    cy.get('rdf-form').shadow()
    .find('.form-element[name="name"] input')
    .should('have.value', 'Jane Doe')

    cy.get('rdf-form').shadow()
    .find('.form-element[name="givenName"] input')
    .should('have.value', 'Jane')

    cy.get('rdf-form').shadow()
    .find('.form-element[name="familyName"] input')
    .should('have.value', 'Doe')
  })

  it('should translate a field and the exported json-ld should match', function () {
    cy.visit('http://localhost:8070/person-form.html')

    cy.get('rdf-form').shadow()
    .find('.language-control-wrapper .ss-values').click().wait(100)

    cy.get('rdf-form').shadow().find('.language-control-wrapper input').type('Engl', { force: true })
    cy.get('rdf-form').shadow().find('.ss-option:first').click()

    cy.get('rdf-form').shadow()
    .find('.language-control-wrapper .ss-values').click().wait(100)

    cy.get('rdf-form').shadow().find('.language-control-wrapper input').type('Fren', { force: true })
    cy.get('rdf-form').shadow().find('.ss-option:first').click()


    cy.get('rdf-form').shadow().wait(100).find('.language-tab').its('length').should('eq', 2)

    cy.get('rdf-form').shadow()
    .find('.form-element[name="name"] .menu-wrapper .menu-button').click()
    cy.get('rdf-form').shadow()
    .find('.form-element[name="name"] .menu-wrapper .button.add').click()

    cy.get('rdf-form').shadow().find('.language-tab[lang="fr"]').click()

    cy.get('rdf-form').shadow()
    .find('.form-element[name="name"] input')
    .type('J', { force: true }).wait(50)
    .type('ean Doe', { force: true })

    cy.get('rdf-form').shadow()
    .find('.form-element[name="givenName"] .menu-wrapper .menu-button').click()
    cy.get('rdf-form').shadow()
    .find('.form-element[name="givenName"] .menu-wrapper .button.add').click()

    cy.get('rdf-form').shadow()
    .find('.form-element[name="givenName"] input')
    .type('J', { force: true }).wait(50)
    .type('ean', { force: true })


    cy.document()
    .then($document => {
      const form = $document.querySelector('rdf-form')
      form.addEventListener('save', (event) => {
        const collapsedJsonLd = event.detail
        expect(collapsedJsonLd['schema:name'].find(item => item['@language'] === 'fr')['@value']).to.equal('Jean Doe')
        expect(collapsedJsonLd['schema:name'].find(item => item['@language'] === 'en')['@value']).to.equal('Jane Doe')

        expect(collapsedJsonLd['schema:givenName'].find(item => item['@language'] === 'fr')['@value']).to.equal('Jean')
        expect(collapsedJsonLd['schema:givenName'].find(item => item['@language'] === 'en')['@value']).to.equal('Jane')
      }, {
        once: true
      })
    })

    cy.get('rdf-form').shadow().find('.button.save').click().wait(100)

  })
})
