import React, { useState } from 'react'
import { Results } from './Results'
import useCalculatorStore from '../store/CalculatorStore'
import useContentStore from '../store/ContentStore'

export const TroncCalculator = () => {
  //Controlled Form >> start
  const [troncPercent, setTroncPercent] = useState(3.75)
  const handleTroncPercent = e => setTroncPercent(parseFloat(e.target.value))

  const [serviceCharge, setServiceCharge] = useState(0)
  const handleServiceCharge = e => setServiceCharge(parseFloat(e.target.value))

  const [checksPaid, setChecksPaid] = useState(0)
  const handleChecksPaid = e => setChecksPaid(parseFloat(e.target.value))
  // Controlled Form >> end

  // STATE
  const setTroncCalculation = useCalculatorStore(
    state => state.setTroncCalculation
  )
  const setDisplayResult = useContentStore(state => state.setDisplayResult)
  const displayResult = useContentStore(state => state.displayResult)

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
          onClick={() => setDisplayResult(true)}
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
