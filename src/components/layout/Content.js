import React from 'react'
import { FrontPage } from '../FrontPage'
import { Tools } from '../Tools'
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
        path='/tools'
        render={routerProps => <Tools {...routerProps} />}
      />
    </>
  )
}

export default withRouter(Content)
