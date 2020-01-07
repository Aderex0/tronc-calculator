import React from 'react'
import { FrontPage } from '../FrontPage'
import { Calculators } from '../Calculators'
import { Route, withRouter } from 'react-router-dom'

export const Content = () => {
  return (
    <>
      <Route
        exact
        path='/'
        render={routerProps => <FrontPage {...routerProps} />}
      />
      <Route
        exact
        path='/calculators'
        render={routerProps => <Calculators {...routerProps} />}
      />
    </>
  )
}

export default withRouter(Content)
