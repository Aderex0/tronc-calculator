import React from 'react'
import { FrontPage } from '../FrontPage'
import { Tools } from '../Tools'
import { ContactUs } from '../ContactUs'
import { Route, withRouter } from 'react-router-dom'

export const Content = () => {
  return (
    <>
      <Route
        exact
        path='/'
        render={routerProps => <FrontPage {...routerProps} />}
      />
      <Route path='/tools' render={routerProps => <Tools {...routerProps} />} />
      <Route
        path='/contact-us'
        render={routerProps => <ContactUs {...routerProps} />}
      />
    </>
  )
}

export default withRouter(Content)
