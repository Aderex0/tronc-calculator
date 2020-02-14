import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-options-container'>
          <div className='footer-options'>
            <span>Site map</span>
            <Link to='/tools/tronc-calculator'>
              <span data-testid='footer-tronc-calc'> Tronc Calculator</span>
            </Link>
            <Link to='/tools/earnings-calculator'>
              <span data-testid='footer-earnings-calc'>
                {' '}
                Earnings Calculator
              </span>
            </Link>
            <Link to=''>
              <span data-testid='footer-contact-us'> Contact us</span>
            </Link>
          </div>
        </div>
        <div className='footer-logo'>
          <p>
            © Tronc <br />
            Calculator
          </p>
        </div>
      </div>
    </>
  )
}
