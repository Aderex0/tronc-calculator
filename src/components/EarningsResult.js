import React from 'react'
import useCalculatorStore from '../store/CalculatorStore'

export const EarningsResult = () => {
  const earningsCalculation = useCalculatorStore(
    state => state.earningsCalculation
  )

  return (
    <>
      <div className='results-container'>
        <span>Calculation results</span>
        <span>Your total earnings for the shift</span>
        <span data-testid='total-earnings'>£{earningsCalculation}</span>
        <button data-testid='reset-page'>Refresh</button>
      </div>
    </>
  )
}
