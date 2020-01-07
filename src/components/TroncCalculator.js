import React, { useState } from 'react'

export const TroncCalculator = () => {
  //Controlled Form >> start
  const [troncPercent, setTroncPercent] = useState(0.0)
  const handleTroncPercentage = e => setTroncPercent(parseFloat(e.target.value))

  const [serviceCharge, setServiceCharge] = useState(0.0)
  const handleServiceCharge = e => setServiceCharge(parseFloat(e.target.value))

  const [checksPaid, setChecksPaid] = useState(0.0)
  const handleChecksPaid = e => setChecksPaid(parseFloat(e.target.value))
  // Controlled Form >> end

  const handleTroncCalculation = event => {
    event.preventDefault()

    const sales = checksPaid - serviceCharge
    const receivedServiceCharge = serviceCharge - (sales / 100) * troncPercent
    setTroncPercent(0.0)
    setServiceCharge(0.0)
    setChecksPaid(0.0)
  }

  return (
    <>
      <form onSubmit={handleTroncCalculation}>
        <label>Tronc rate</label>
        <input
          className='tronc-percentage-field'
          data-testid='tronc-percentage-field'
          onChange={handleTroncPercentage}
          type='number'
          step='any'
          placeholder='3.75'
        />
        <label>Service charge</label>
        <input
          className='service-charge-field'
          data-testid='service-charge-field'
          onChange={handleServiceCharge}
          type='number'
          step='any'
          placeholder='76.40'
        />
        <label>Checks paid</label>
        <input
          className='checks-paid-field'
          data-testid='checks-paid-field'
          onChange={handleChecksPaid}
          type='number'
          step='any'
          placeholder='685.98'
        />
        <input
          className='calculate-tronc-btn'
          data-testid='calculate-tronc-btn'
          type='submit'
          value='Calculate!'
          step='any'
        />
      </form>
    </>
  )
}
