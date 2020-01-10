const url = 'http://localhost:3000'

describe('Visits the website, chooses tronc calculator, return results and refreshes', () => {
  const troncPercentage = (3.75).toFixed(2)
  const checksPaid = (1543.59).toFixed(2)
  const serviceCharge = (165.4).toFixed(2)
  const sales = checksPaid - serviceCharge

  it('finds two buttons clicks tronc calculator button', () => {
    cy.visit(url)
    cy.get('[data-testid="tronc-btn"]').click()
  })

  it('enters tronc fields, calculates the tronc and show the results component', () => {
    cy.get('[data-testid="tronc-percentage-field"]').type(troncPercentage)
    cy.get('[data-testid="service-charge-field"]').type(serviceCharge)
    cy.get('[data-testid="checks-paid-field"]').type(checksPaid)
    cy.get('[data-testid="remaining-service').should('not.exist')
    cy.get('[data-testid="calculate-tronc-btn"]').click()
    cy.get('[data-testid="remaining-service').contains(
      (serviceCharge - (sales / 100) * troncPercentage).toFixed(2)
    )
  })

  it('clicks refresh and removes the results component', () => {
    cy.get('[data-testid="reset-page"]').click()
    cy.get('[data-testid="remaining-service').should('not.exist')
  })

  it('resets tronc calculator input fields', () => {
    cy.get('[data-testid="tronc-percentage-field"]').should('contain', '')
    cy.get('[data-testid="service-charge-field"]').should('contain', '')
    cy.get('[data-testid="checks-paid-field"]').should('contain', '')
  })
})
