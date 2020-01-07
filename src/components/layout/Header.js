import React from 'react'
import { Link } from 'react-router-dom'
// import { IoIosMenu } from 'react-icons/io'

export const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='logo-grid-area'>
          <img src='https://img.icons8.com/ultraviolet/40/000000/calculator.png' />
          <div className='logo-text-container'>
            <p>Tronc Calculator</p>
          </div>
        </div>
      </Link>
      {/* <div className='menu-area'>
        <IoIosMenu size='6vh' />
      </div> */}
    </header>
  )
}
