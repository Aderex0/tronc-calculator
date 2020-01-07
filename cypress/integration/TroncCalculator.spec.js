const url = 'http://localhost:3000'

describe('Visits the website, chooses tronc calculator and returns the result', () => {
  const troncPercentage = (3.75).toFixed(2)
  const checksPaid = (1543.59).toFixed(2)
  const serviceCharge = (165.4).toFixed(2)
  const sales = checksPaid - serviceCharge

  it('finds two buttons clicks tronc calculator button', () => {
    cy.visit(url)
    cy.get('[data-testid="tronc-btn"]').click()
  })

  it('enters tronc fields and calculates tronc', () => {
    cy.get('[data-testid="tronc-percentage-field"]').type(troncPercentage)
    cy.get('[data-testid="service-charge-field"]').type(serviceCharge)
    cy.get('[data-testid="checks-paid-field"]').type(checksPaid)
    cy.get('[data-testid="calculate-tronc-btn"]').click()
  })
})
