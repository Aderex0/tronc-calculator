/// <reference types="cypress" />

describe('Visits the website and checks if frontpage buttons works', () => {
  const url = 'http://localhost:3000'

  it('clicks the logo to return to frontpage', () => {
    cy.visit(url)
    cy.get('[data-testid="frontpage-return"]').click()
  })
  it('frontpage shoudl contain all the elements', () => {
    cy.get('.fp-text-container').should('have.length', 2)
    cy.get('.intro-container').should('have.class', 'intro-text', 'required')
  })
})
