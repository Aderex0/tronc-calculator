const url = 'http://localhost:3000'

describe('Visits the website and checks if frontpage buttons works', () => {
  it('clicks the logo to return to frontpage', () => {
    cy.visit(url)
    cy.get('[data-testid="frontpage-return"]').click()
    cy.get('.fp-text-container').should('have.length', 2)
  })
})
