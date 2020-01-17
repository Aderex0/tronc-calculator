import React, { useState } from 'react'
import { Results } from './Results'
import { useCalculator } from '../hooks/useCalculator'
import useCalculatorStore from '../store/CalculatorStore'
import useContentStore from '../store/ContentStore'

export const TroncCalculator = () => {
  const {
    troncPercent,
    setTroncPercent,
    handleTroncPercent,
    serviceCharge,
    setServiceCharge,
    handleServiceCharge,
    checksPaid,
    setChecksPaid,
    handleChecksPaid
  } = useCalculator()

  // State ---> START
  const setTroncCalculation = useCalculatorStore(
    state => state.setTroncCalculation
  )
  const setDisplayResult = useContentStore(state => state.setDisplayResult)
  const displayResult = useContentStore(state => state.displayResult)
  // State ---> END

  const handleTroncCalculation = event => {
    event.preventDefault()

    const sales = checksPaid - serviceCharge
    const remainingServiceCharge = serviceCharge - (sales / 100) * troncPercent

    setTroncCalculation(parseFloat(remainingServiceCharge.toFixed(2)))
  }

  return (
    <>
      <form onSubmit={handleTroncCalculation}>
        <label id='Tr'>Tronc rate</label>
        <input
          className='tronc-percentage-field'
          data-testid='tronc-percentage-field'
          onChange={handleTroncPercent}
          type='number'
          step='any'
          value={troncPercent}
          id='Tr'
        />
        <label id='Sc'>Service charge</label>
        <input
          className='service-charge-field'
          data-testid='service-charge-field'
          onChange={handleServiceCharge}
          type='number'
          step='any'
          value={serviceCharge}
          id='Sc'
        />
        <label id='Cp'>Checks paid</label>
        <input
          className='checks-paid-field'
          data-testid='checks-paid-field'
          onChange={handleChecksPaid}
          type='number'
          step='any'
          value={checksPaid}
          id='Cp'
        />
        <input
          className='calculate-tronc-btn'
          data-testid='calculate-tronc-btn'
          type='submit'
          value='Calculate!'
          step='any'
          onClick={() => {
            setDisplayResult(true)
          }}
        />
      </form>
      {displayResult && (
        <Results
          setTroncPercentage={setTroncPercent}
          setServiceCharge={setServiceCharge}
          setChecksPaid={setChecksPaid}
        />
      )}
    </>
  )
}
