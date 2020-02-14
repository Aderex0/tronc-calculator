import React from 'react'
import DateTime from '../hooks/useDateTime'
import { useCalculator } from '../hooks/useCalculator'
import moment from 'moment'
import useCalculatorStore from '../store/CalculatorStore'
import { EarningsResult } from './EarningsResult'

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

  const setEarningsCalculation = useCalculatorStore(
    state => state.setEarningsCalculation
  )
  const earningsCalculation = useCalculatorStore(
    state => state.earningsCalculation
  )

  const calculateEarnings = event => {
    event.preventDefault()
    //finding real sales
    const sales = checksPaid - serviceCharge
    // finding the service charge remaining after tronc deduction
    const remainingServiceCharge = serviceCharge - (sales / 100) * troncPercent
    // using momentJS to calculate the time worked in minutes
    const minutesWorked = moment
      .utc(shiftEnd)
      .seconds(0)
      .milliseconds(0)
      .diff(
        moment
          .utc(shiftStart)
          .seconds(0)
          .milliseconds(0),
        'minutes'
      )
    // formatting time in hours and minutes to display to user
    const formated = moment
      .utc(minutesWorked * 60 * 1000)
      .format('HH [ hour(s) and ] mm [ minute(s)]')
    //finding out the total earnings - service charge, cash tips and salary pay.
    const totalEarnings =
      remainingServiceCharge + cashTips + (minutesWorked / 60) * hourlyRate
    //save it in store
    setEarningsCalculation(parseFloat(totalEarnings.toFixed(2)))
  }

  return (
    <>
      <form onSubmit={calculateEarnings}>
        <h2>Earnings calculator</h2>
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
        <DateTime
          handleChange={setShiftStart}
          value={shiftStart}
          testId={'earnings-shift-start'}
        />
        <label>Shift end</label>
        <DateTime
          handleChange={setShiftEnd}
          value={shiftEnd}
          testId={'earnings-shift-end'}
          font-size='3vw'
        />
        <input
          className='calculate-earnings-btn'
          data-testid='calculate-earnings-btn'
          type='submit'
          value='Calculate!'
        />
      </form>
      {earningsCalculation ? <EarningsResult /> : null}
    </>
  )
}
