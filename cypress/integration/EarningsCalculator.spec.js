import { GiCyberEye } from 'react-icons/gi'

const url = 'http://localhost:3000'

describe('Visits the website, clicks on earnings calculator, calculates total earnings and refreshes', () => {
  const troncPercentage = (3.75).toFixed(2)
  const checksPaid = (1543.59).toFixed(2)
  const serviceCharge = (165.4).toFixed(2)
  const sales = checksPaid - serviceCharge

  it('enters all the earnings input fields correctly and gets the result', () => {
    cy.visit(url)
    cy.get('[data-testid="earnings-btn"]').click()
    cy.get('[data-testid="earnings-tronc-percentage-field"]')
      .clear()
      .type(troncPercentage)
    cy.get('[data-testid="earnings-service-charge-field"]')
      .clear()
      .type(serviceCharge)
    cy.get('[data-testid="earnings-checks-paid-field"]')
      .clear()
      .type(checksPaid)
    cy.get('[data-testid="earnings-checks-paid-field"]')
      .clear()
      .type()
    cy.get('[data-testid="earnings-checks-paid-field"]')
      .clear()
      .type()
    cy.get('[data-testid="earnings-checks-paid-field"]')
      .clear()
      .type()
    // cy.get('[data-testid="remaining-service').should('not.exist')
    // cy.get('[data-testid="calculate-tronc-btn"]').click()
    // cy.get('[data-testid="remaining-service').contains(
    //   (serviceCharge - (sales / 100) * troncPercentage).toFixed(2)
    // )
  })
})
