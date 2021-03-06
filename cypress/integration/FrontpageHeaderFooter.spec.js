/// <reference types="cypress" />

describe('Visits the website and checks if frontpage buttons works', () => {
  const url = 'http://localhost:3000'

  it('clicks the logo to return to frontpage', () => {
    cy.visit(url)
    cy.get('[data-testid="frontpage-return"]').click()
    cy.url().should('include', url)
  })

  it('frontpage should contain all the elements', () => {
    cy.get('.fp-text-container').should('have.length', 2)
    cy.get('.intro-container')
      .children('.intro-text')
      .should('exist')
    cy.get('.intro-container')
      .children('.intro-image')
      .should('exist')
    cy.get('.intro-container')
      .children('.circle')
      .should('exist')
    cy.get('.footer-container')
      .children('.footer-options-container')
      .children('div')
      .children('a')
      .should('have.length', 3)
    cy.get('.footer-container')
      .children('.footer-logo')
      .should('have.length', 1)
  })

  it('footer links should be working', () => {
    cy.get('[data-testid="footer-tronc-calc"]').click()
    cy.get('h2').contains('Tronc calculator')
    cy.get('[data-testid="footer-earnings-calc"]').click()
    cy.get('h2').contains('Earnings calculator')
    cy.get('[data-testid="footer-contact-us"]').click()
    cy.get('h2').contains('Contact us')
  })
})
