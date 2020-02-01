import cypress from 'cypress'

const url = 'http://localhost:3000/tools'

describe('visits the tools page and checks if links are working', () => {
  it('visits the url, clicks and opens tronc calculator', () => {
    cy.visit(url)
    cy.get('[data-testid="sidebar-tronc-click"]').click()
    cy.get('form')
      .children()
      .should('have.length', 8)
  })

  it('clicks and opens earnings calculator', () => {
    cy.get('[data-testid="sidebar-earnings-click"]').click()
    cy.get('form')
      .children()
      .should('have.length', 16)
  })
})
