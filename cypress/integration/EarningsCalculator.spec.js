import { GiCyberEye } from 'react-icons/gi'

const url = 'http://localhost:3000'

describe('Visits the website, clicks on earnings calculator, calculates total earnings and refreshes', () => {
  const troncPercentage = 3.75
  const checksPaid = 1543.59
  const serviceCharge = 165.4
  const cashTips = 31.0
  const hourlyRate = 8.21
  const sales = parseFloat(checksPaid - serviceCharge)
  const tronc = parseFloat(serviceCharge - (sales / 100) * troncPercentage)
  const hourlyPay = parseFloat((430 / 60) * hourlyRate)

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
    cy.get('[data-testid="earnings-cash-tips"]')
      .clear()
      .type(cashTips)
    cy.get('[data-testid="earnings-hourly-rate"]')
      .clear()
      .type(hourlyRate)
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
})
