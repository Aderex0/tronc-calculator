import React from 'react'
import { Link } from 'react-router-dom'
import IntroCalculator from '../images/intro-calculator.png'

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
      <div className='intro-container'>
        <img
          className='intro-image'
          src={IntroCalculator}
          alt='calculator'
        ></img>
        <div className='circle'></div>
        <p className='intro-text'>
          Welcome to Tronc Calculator! Tronc is a system that restaurants use to
          help spliting the service charge between working staff. There are a
          fair number of restaurants that employ tronc system to work and if you
          are a waiter that works that works with tronc, this tool is exactly
          what you need!
        </p>
      </div>
      <div className='footer-container'>
        <div className='footer-options'>
          <h3>Site map</h3>
          <p>Tronc Calculator</p>
          <p>Earnings Calculator</p>
          <p>Contact us</p>
        </div>
        <div className='footer-logo'>
          <p>
            Tronc <br />
            Calculator
          </p>
        </div>
      </div>
    </>
  )
}
