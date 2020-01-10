import React, { useEffect } from 'react'
import useCalculatorStore from '../store/CalculatorStore'
import useContentStore from '../store/ContentStore'

export const Results = ({
  setTroncPercentage,
  setServiceCharge,
  setChecksPaid
}) => {
  useEffect(() => {
    window.scrollTo(0, 1000)
  }, [])

  const troncCalculation = useCalculatorStore(state => state.troncCalculation)
  const setDisplayResult = useContentStore(state => state.setDisplayResult)

  const resetTroncCalculator = () => {
    setDisplayResult(false)
    setTroncPercentage(3.75)
    setServiceCharge(0)
    setChecksPaid(0)
  }

  return (
    <div className='results-container'>
      <span>Calculation results</span>
      <span>Remaining service charge</span>
      <span data-testid='remaining-service'>£{troncCalculation}</span>
      <button data-testid='reset-page' onClick={() => resetTroncCalculator()}>
        Refresh
      </button>
    </div>
  )
}
