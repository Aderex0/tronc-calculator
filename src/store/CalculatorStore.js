import create from 'zustand'

const setTroncCalculation = remainingServiceCharge => ({
  troncCalculation: remainingServiceCharge
})

const [useCalculatorStore] = create(set => ({
  troncCalculation: null,
  setTroncCalculation: remainingServiceCharge =>
    set(setTroncCalculation(remainingServiceCharge))
}))

export default useCalculatorStore
