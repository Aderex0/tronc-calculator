import React from 'react'
import { Link } from 'react-router-dom'

export const FrontPage = () => {
  return (
    <>
      <div id='mobile-cover-img'></div>
      <div id='tronc-btn-container'>
        <div className='fp-inner-container'>
          <div className='fp-text-container'>
            <h2>Tronc Calculator</h2>
            <Link to='tools/tronc-calculator'>
              <button className='tronc-btn' data-testid='tronc-btn'>
                Click Here
              </button>
            </Link>
            <p>A tronc calculator to calculate the remaining service</p>
          </div>
        </div>
      </div>
      <div id='earnings-btn-container'>
        <div className='fp-inner-container'>
          <div className='fp-text-container'>
            <h2>Earnings Calculator</h2>
            <Link to='tools/earnings-calculator'>
              <button className='earnings-btn' data-testid='earnings-btn'>
                Click Here
              </button>
            </Link>
            <p>
              Calculate your total earnings; hourly pay, tronc and cash tips
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
