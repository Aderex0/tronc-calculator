/// <reference types="cypress" />

describe('Visits the website, clicks on earnings calculator, calculates total earnings and refreshes', () => {
  const url = 'http://localhost:3000/tools/earnings-calculator'
  const troncPercentage = 3.75
  const checksPaid = 1543.59
  const serviceCharge = 165.4
  const cashTips = 31.0
  const hourlyRate = 8.21
  const sales = checksPaid - serviceCharge
  const tronc = serviceCharge - (sales / 100) * troncPercentage
  const hourlyPay = (430 / 60) * hourlyRate
  //formating date by moment
  const dateNow = Cypress.moment().format('DD/MM/YYYY HH:mm')

  it('visit the page, enters all the earnings input fields correctly and gets the result', () => {
    cy.visit(url)
    cy.get('[data-testid="earnings-tronc-percentage-field"]')
      .clear()
      .type(troncPercentage.toString())
    cy.get('[data-testid="earnings-service-charge-field"]')
      .clear()
      .type(serviceCharge.toString())
    cy.get('[data-testid="earnings-checks-paid-field"]')
      .clear()
      .type(checksPaid.toString())
    cy.get('[data-testid="earnings-cash-tips"]')
      .clear()
      .type(cashTips.toString())
    cy.get('[data-testid="earnings-hourly-rate"]')
      .clear()
      .type(hourlyRate.toString())
    cy.get('[data-testid="earnings-shift-start"] > div:first > input')
      .clear()
      .type('22/01/2020 17:00')
    cy.get('[data-testid="earnings-shift-end"] > div:first > input')
      .clear()
      .type('23/01/2020 00:10')
    cy.get('[data-testid="total-earnings').should('not.exist')
    cy.get('[data-testid="calculate-earnings-btn"]').click()
    cy.get('[data-testid="total-earnings').contains(
      (tronc + cashTips + hourlyPay).toFixed(2)
    )
  })

  it('clicks refresh and removes the results component', () => {
    cy.get('[data-testid="reset-page"]').click()
    cy.get('[data-testid="remaining-service').should('not.exist')
  })

  it('resets earnings calculator input fields', () => {
    cy.get('[data-testid="earnings-service-charge-field"]').should(
      'have.value',
      '0'
    )
    cy.get('[data-testid="earnings-checks-paid-field"]').should(
      'have.value',
      '0'
    )
    cy.get('[data-testid="earnings-cash-tips"]').should('have.value', '0')
    cy.get('[data-testid="earnings-shift-start"] > div:first > input').should(
      'have.value',
      dateNow
    )
    cy.get('[data-testid="earnings-shift-end"] > div:first > input').should(
      'have.value',
      dateNow
    )
  })
})
