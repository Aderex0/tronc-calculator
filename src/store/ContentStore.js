import create from 'zustand'

const setDisplayResult = displayValue => ({
  displayResult: displayValue
})

// Calculator 1 = TroncCalculator, 2 = Earnings Calculator
const [useContentStore] = create(set => ({
  displayResult: false,
  setDisplayResult: displayValue => set(setDisplayResult(displayValue))
}))

export default useContentStore
