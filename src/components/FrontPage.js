import React from 'react'
import useContentStore from '../store/ContentStore'
import { Link } from 'react-router-dom'

export const FrontPage = () => {
  const setDisplayCalculatorById = useContentStore(
    state => state.setDisplayCalculatorById
  )

  return (
    <>
      <div id='mobile-cover-img'></div>
      <div id='tronc-btn-container'>
        <div className='fp-inner-container'>
          <div className='fp-text-container'>
            <h2>Tronc Calculator</h2>
            <Link to='/calculators'>
              <button
                className='tronc-btn'
                data-testid='tronc-btn'
                onClick={() => setDisplayCalculatorById(1)}
              >
                Click Here
              </button>
            </Link>
            <p>
              A tronc calculator to easily calculate the remaining service
              charge
            </p>
          </div>
        </div>
      </div>
      <div id='earnings-btn-container'>
        <div className='fp-inner-container'>
          <div className='fp-text-container'>
            <h2>Earnings Calculator (coming soon)</h2>
            <button
              className='earnings-btn'
              data-testid='earnings-btn'
              onClick={() => setDisplayCalculatorById(2)}
            >
              Click Here
            </button>
            <p>
              Calculate your total earnings; hourly pay, tronc and cash tips
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
