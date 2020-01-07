import React from 'react'
import { Content } from './components/layout/Content'
import './App.scss'
import { Header } from './components/layout/Header'
// import { withRouter, Route } from 'react-router-dom'

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <Content />
    </div>
  )
}
