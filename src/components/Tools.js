import React from 'react'
import { TroncCalculator } from './TroncCalculator'
import { EarningsCalculator } from './EarningsCalculator'
import { Sidebar } from './Sidebar'
import { Route } from 'react-router-dom'

export const Tools = props => {
  return (
    <>
      <Sidebar />
      <div className='tools-container'>
        <Route
          exact
          path='/tools/tronc-calculator'
          render={routerProps => <TroncCalculator {...routerProps} />}
        />
        <Route
          exact
          path='/tools/earnings-calculator'
          render={routerProps => <EarningsCalculator {...routerProps} />}
        />
      </div>
    </>
  )
}
