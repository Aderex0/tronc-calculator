import create from 'zustand'

const setDisplayCalculatorById = calculatorId => ({
  displayCalculatorId: calculatorId
})

// Calculator 1 = TroncCalculator, 2 = Earnings Calculator
const [useContentStore] = create(set => ({
  displayCalculatorId: 1,
  setDisplayFrontPage: calculatorId =>
    set(setDisplayCalculatorById(calculatorId))
}))

export default useContentStore
