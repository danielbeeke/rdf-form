describe('Fields should work', function () {
  it('should update reference fields correctly', function () {
    cy.visit('http://localhost:8070/fields-form.html')

    cy.get('rdf-form').shadow()
    .find('.form-element[name="references"] input').type('Kierkegaard')

    cy.get('rdf-form').shadow()
    .find('.form-element').contains('Philosopher').click()
  })
})
