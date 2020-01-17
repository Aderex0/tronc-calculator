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

  const [hoursStart, setHoursStart] = useState(0)
  const handleHoursStart = e => setHoursStart(parseFloat(e.target.value))

  const [hoursEnd, setHoursEnd] = useState(0)
  const handleHoursEnd = e => setHoursEnd(parseFloat(e.target.value))

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
    hoursStart,
    setHoursStart,
    handleHoursStart,
    hoursEnd,
    setHoursEnd,
    handleHoursEnd
  }
}
