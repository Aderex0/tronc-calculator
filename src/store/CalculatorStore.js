import create from 'zustand'

const setTroncCalculation = remainingServiceCharge => ({
  troncCalculation: remainingServiceCharge
})

const setEarningsCalculation = totalEarnings => ({
  earningsCalculation: totalEarnings
})

const [useCalculatorStore] = create(set => ({
  troncCalculation: null,
  earningsCalculation: null,
  setTroncCalculation: remainingServiceCharge =>
    set(setTroncCalculation(remainingServiceCharge)),
  setEarningsCalculation: totalEarnings =>
    set(setEarningsCalculation(totalEarnings))
}))

export default useCalculatorStore
