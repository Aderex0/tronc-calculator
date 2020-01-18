import { useState } from 'react'

export const useCalculator = () => {
  const [troncPercent, setTroncPercent] = useState(3.75)
  const handleTroncPercent = e => setTroncPercent(parseFloat(e.target.value))

  const [serviceCharge, setServiceCharge] = useState(0)
  const handleServiceCharge = e => setServiceCharge(parseFloat(e.target.value))

  const [checksPaid, setChecksPaid] = useState(0)
  const handleChecksPaid = e => setChecksPaid(parseFloat(e.target.value))

  const [cashTips, setCashTips] = useState(0)
  const handleCashTips = e => setCashTips(parseFloat(e.target.value))

  const [hourlyRate, setHourlyRate] = useState(0)
  const handleHourlyRate = e => setHourlyRate(parseFloat(e.target.value))

  const [shiftStart, setShiftStart] = useState(new Date())

  const [shiftEnd, setShiftEnd] = useState(new Date())

  return {
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
  }
}
