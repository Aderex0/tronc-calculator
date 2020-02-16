/// <reference types="cypress" />

describe('visists the contact form and sends a contact request sucessfully', () => {
  const url = 'http://localhost:3000/contact-us'

  it('visit the page', () => {
    cy.visit(url)
  })

  it('finds the subject field, inputs a subjects, colors and span phrase change accordingly', () => {
    //Subject dropdown helper instruction must contain text on load.
    cy.get('[data-test-id="contact-us-sb-span"]').contains(
      'Must choose a subject'
    )
    //Choosing "Choose one" option, color stays red before and after choosing.
    cy.get('[data-testid="contact-us-subject"]')
      .should('have.class', 'invalid')
      .select('Choose one')
      .should('have.class', 'invalid')
    //Choosing "Choose one", subject dropdown explanation stays.
    cy.get('[data-test-id="contact-us-sb-span"]').contains(
      'Must choose a subject'
    )
    //Choosing "Leaving a comment", color becomes turquoise.
    cy.get('[data-testid="contact-us-subject"]')
      .select('Leaving a comment')
      .should('not.have.class', 'invalid')
    //Choosing "Leaving a comment", subject dropdown explanation contains no text.
    cy.get('[data-test-id="contact-us-sb-span"]').should('not.contain.text')
    //Choosing "I have a suggestion", color becomes turqouse.
    cy.get('[data-testid="contact-us-subject"]')
      .select('I have a suggestion')
      .should('not.have.class', 'invalid')
    //Choosing "I have a suggestion", subject dropdown explanation contains no text.
    cy.get('[data-test-id="contact-us-sb-span"]').should('not.contain.text')
    //Choosing "Reporting for errors", color becomes turquoise.
    cy.get('[data-testid="contact-us-subject"]')
      .select('Reporting an error')
      .should('not.have.class', 'invalid')
    //Choosing "Reporting for errors", subject dropdown explanation contains no text.
    cy.get('[data-test-id="contact-us-sb-span"]').should('not.contain.text')
    //Choosing "Reporting for errors", email field becomes red.
    cy.get('[data-testid="contact-us-email"]').should('have.class', 'invalid')
    //Choosing "Reporting for errors", email field explanation must contain text.
    cy.get('[data-testid="contact-us-em-span"]').contains(
      'We require a valid email for errors'
    )
    //Choosing "Contacting for other reason", color becomes turquoise
    cy.get('[data-testid="contact-us-subject"]')
      .select('Contacting for other reasons')
      .should('not.have.class', 'invalid')
    //Choosing "Contacting for other reason", subject dropdown explanation contains no text.
    cy.get('[data-test-id="contact-us-sb-span"]').should('not.contain.text')
    //Choosing "Contacting for other reason", email field changes back to turqouise
    cy.get('[data-testid="contact-us-email"]').should(
      'not.have.class',
      'invalid'
    )
    //Choosing "Contacting for other reason", email field explanation changes back to optional
    cy.get('[data-testid="contact-us-em-span"]').contains('Optional')
  })

  it('finds the name field, inputs name and changes colors accordingly', () => {
    cy.get('[data-test-id="contact-us-nm-span"]').contains(
      'Minimum 2 character'
    )
    cy.get('[data-testid="contact-us-name"]')
      .should('have.class', 'invalid')
      .type('John')
      .should('not.have.class', 'invalid')

    cy.get('[data-test-id="contact-us-nm-span"]').should('not.contain.text')
  })

  it('finds the email field, inputs name and changes colors accordingly', () => {
    cy.get('[data-testid="contact-us-email"]')
      .should('not.have.class', 'invalid')
      .type('wong@gmail.com')
  })

  it('finds the description field, inputs name and changes colors accordingly', () => {
    cy.get('[data-testid="contact-us-details"]')
      .should('have.class', 'invalid')
      .type('This is a test email')
  })

  it('submits the form and displays a success message', () => {
    cy.get('[data-testid="contact-us-submit"]').click()
  })
})
