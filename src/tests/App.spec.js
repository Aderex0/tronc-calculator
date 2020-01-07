import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { App } from '../App'

beforeEach(cleanup)

describe('<App />', () => {
  it('it renders the application', () => {
    const { queryByTestId } = render(<App />)
    expect(queryByTestId).toBeTruthy()
  })
})
