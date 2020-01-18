import React from 'react'
import DateTime from '../hooks/useDateTime'
import { useCalculator } from '../hooks/useCalculator'
import moment from 'moment'

export const EarningsCalculator = () => {
  const {
    troncPercent,
    setTroncPercent,
    handleTroncPercent,
    serviceCharge,
    setServiceCharge,
    handleServiceCharge,
    checksPaid,
    setChecksPaid,
    handleChecksPaid,
    cashTips,
    setCashTips,
    handleCashTips,
    hourlyRate,
    setHourlyRate,
    handleHourlyRate,
    shiftStart,
    setShiftStart,
    shiftEnd,
    setShiftEnd
  } = useCalculator()

  const calculateEarnings = event => {
    event.preventDefault()

    const sales = checksPaid - serviceCharge
    const remainingServiceCharge = serviceCharge - (sales / 100) * troncPercent
    const hoursWorked = moment.utc(shiftEnd).diff(moment(shiftStart, 'seconds'))
    const formated = moment
      .utc(hoursWorked * 1000)
      .format('HH [ hour(s) and ] mm [ minute(s)]')
    const totalEarnings =
      remainingServiceCharge + cashTips + (hoursWorked / 60 / 60) * hourlyRate
  }

  return (
    <>
      <form onSubmit={calculateEarnings}>
        <label id='Tr'>Tronc rate</label>
        <input
          className='earnings-tronc-percentage-field'
          data-testid='earnings-tronc-percentage-field'
          type='number'
          value={troncPercent}
          onChange={handleTroncPercent}
          step='any'
          id='Tr'
        />
        <label id='Sc'>Service charge</label>
        <input
          className='earnings-service-charge-field'
          data-testid='earnings-service-charge-field'
          value={serviceCharge}
          onChange={handleServiceCharge}
          type='number'
          step='any'
          id='Sc'
        />
        <label id='Cp'>Checks paid</label>
        <input
          className='earnings-checks-paid-field'
          data-testid='earnings-checks-paid-field'
          type='number'
          onChange={handleChecksPaid}
          step='any'
          value={checksPaid}
          id='Cp'
        />
        <label id='Cp'>Cash tips</label>
        <input
          className='earnings-cash-tips'
          data-testid='earnings-cash-tips'
          value={cashTips}
          onChange={handleCashTips}
          type='number'
          step='any'
          id='Ct'
        />
        <label id='Hr'>Hourly Rate</label>
        <input
          className='earnings-hourly-rate'
          data-testid='earnings-hourly-rate'
          value={hourlyRate}
          onChange={handleHourlyRate}
          type='number'
          step='any'
          id='Hr'
        />
        <label>Shift start</label>
        <DateTime handleChange={setShiftStart} value={shiftStart} />
        <label>Shift end</label>
        <DateTime handleChange={setShiftEnd} value={shiftEnd} />
        <input
          className='calculate-earnings-btn'
          data-testid='calculate-earnings-btn'
          type='submit'
          value='Calculate!'
        />
      </form>
    </>
  )
}
