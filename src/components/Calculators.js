import React from 'react'
import { TroncCalculator } from './TroncCalculator'
import useContentStore from '../store/ContentStore'
import { EarningsCalculator } from './EarningsCalculator'
import { Sidebar } from './Sidebar'

export const Calculators = () => {
  const displayCalculatorId = useContentStore(
    state => state.displayCalculatorId
  )

  return (
    <>
      <Sidebar />
      <div className='calculators-container'>
        {displayCalculatorId === 1 ? (
          <TroncCalculator />
        ) : displayCalculatorId === 2 ? (
          <EarningsCalculator />
        ) : null}
      </div>
    </>
  )
}
