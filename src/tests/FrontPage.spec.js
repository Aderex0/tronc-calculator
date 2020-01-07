import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { FrontPage } from '../components/FrontPage'

beforeEach(cleanup)

describe('<FrontPage />', () => {
  it('renders the FrontPage component', () => {
    const { queryByTestId } = render(<FrontPage />)
    expect(queryByTestId('tronc-btn')).toBeTruthy()
    expect(queryByTestId('earnings-btn')).toBeTruthy()
  })

  it('renders a FrontPage component and accepts an onClick', () => {
    const { queryByTestId } = render(<FrontPage />)
    expect(queryByTestId('tronc-btn')).toBeTruthy()
    expect(queryByTestId('earnings-btn')).toBeTruthy()
    fireEvent.click(queryByTestId('tronc-btn'))
    fireEvent.click(queryByTestId('earnings-btn'))
  })
})
