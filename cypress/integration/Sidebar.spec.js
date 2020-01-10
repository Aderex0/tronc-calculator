import { GiCyberEye } from 'react-icons/gi'

const url = 'http://localhost:3000/calculators'

describe('visits the calculators page and checks the sidebar', () => {
  it('visits the url and opens the sidebar to find 2 calculators', () => {
    cy.visit(url)
    // need to check mobile cy.get('[data-testid="sidebar-action"').click()
    cy.get('[data-testid="sidebar-tronc-click"]').click()
  })
})
