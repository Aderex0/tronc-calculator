import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='logo-grid-area' data-testid='frontpage-return'>
          <img src='https://img.icons8.com/ultraviolet/40/000000/calculator.png' />
          <div className='logo-text-container'>
            <p>Tronc Calculator</p>
          </div>
        </div>
      </Link>
    </header>
  )
}
