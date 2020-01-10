import React from 'react'
import useContentStore from '../store/ContentStore'

import { IoIosMenu, IoIosCalculator } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'

export const Sidebar = () => {
  const setDisplayCalculatorById = useContentStore(
    state => state.setDisplayCalculatorById
  )

  const toggleSidebar = () => {
    const btn = document.getElementsByClassName('sidebar-container')[0]

    btn.style.left === '-250px'
      ? (btn.style.left = '0px')
      : (btn.style.left = '-250px')
  }

  return (
    <div className='sidebar-container'>
      <div
        className='toggle-btn'
        data-testid='sidebar-action'
        onClick={() => toggleSidebar()}
      >
        <IoIosMenu size='50px' color='rgb(102, 51, 153)' />
      </div>
      <ul>
        <li></li>
        <li
          data-testid='sidebar-tronc-click'
          onClick={() => {
            setDisplayCalculatorById(1)
            // toggleSidebar()
          }}
        >
          <span>
            <IoIosCalculator size='30px' viewBox='0 0 470 470' />
          </span>
          <p>Tronc Calculator</p>
        </li>
        <li data-testid='sidebar-earnings-click'>
          <span>
            <GiReceiveMoney size='30px' />
          </span>
          <p>Earnings Calculator</p>
          <p style={{ fontSize: '1vw' }}> (coming soon)</p>
        </li>
      </ul>
    </div>
  )
}
