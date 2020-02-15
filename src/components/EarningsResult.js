import React, { useEffect } from 'react'
import useCalculatorStore from '../store/CalculatorStore'

export const EarningsResult = ({
  setServiceCharge,
  setChecksPaid,
  setCashTips,
  setShiftStart,
  setShiftEnd
}) => {
  useEffect(() => {
    window.scrollTo(0, 1000)
  }, [])

  const earningsCalculation = useCalculatorStore(
    state => state.earningsCalculation
  )

  const setEarningsCalculation = useCalculatorStore(
    state => state.setEarningsCalculation
  )

  const resetEarningsCalculator = () => {
    setEarningsCalculation(null)
    setServiceCharge(0)
    setChecksPaid(0)
    setCashTips(0)
    setShiftStart(new Date())
    setShiftEnd(new Date())
  }

  return (
    <>
      <div className='results-container'>
        <span>Calculation results</span>
        <span>Your total earnings for the shift</span>
        <span data-testid='total-earnings'>£{earningsCalculation}</span>
        <button
          data-testid='reset-page'
          onClick={() => resetEarningsCalculator()}
        >
          Refresh
        </button>
      </div>
    </>
  )
}
