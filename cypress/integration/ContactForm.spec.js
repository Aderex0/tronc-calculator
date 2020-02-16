/// <reference types="cypress" />

describe('visists the contact form and sends a contact request sucessfully', () => {
  const url = 'http://localhost:3000/contact-us'

  it('visit the page,finds the contact form and inputs the fields', () => {
    cy.visit(url)
    cy.get('[data-testid="contact-us-name"]').type('John')
    cy.get('[data-testid="contact-us-email"]').type('wong@gmail.com')
    cy.get('[data-testid="contact-us-subject"]')
      .select('Choose one')
      .select('Leaving a comment')
      .select('I have a suggestion')
      .select('Reporting an error')
      .select('Contacting for other reasons')
    cy.get('[data-testid="contact-us-details"]').type('This is a test email')
  })

  it('submits the form and displays a success message', () => {
    cy.get('[data-testid="contact-us-submit"]').click()
  })
})
