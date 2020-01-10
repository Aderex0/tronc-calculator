import create from 'zustand'

const setDisplayCalculatorById = calculatorId => ({
  displayCalculatorId: calculatorId
})

const setDisplayResult = displayValue => ({
  displayResult: displayValue
})

// Calculator 1 = TroncCalculator, 2 = Earnings Calculator
const [useContentStore] = create(set => ({
  displayCalculatorId: 1,
  displayResult: false,
  setDisplayCalculatorById: calculatorId =>
    set(setDisplayCalculatorById(calculatorId)),
  setDisplayResult: displayValue => set(setDisplayResult(displayValue))
}))

export default useContentStore
